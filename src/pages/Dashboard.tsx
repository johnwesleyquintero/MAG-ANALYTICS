
import { useState } from "react";
import { DataImport } from "@/components/DataImport";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AmazonMetricsDisplay } from "@/components/AmazonMetricsDisplay";
import { calculateTacosData } from '@/utils/tacos';
import { calculateKeywordRankings } from '@/utils/keywordRankings';
import { calculateMetrics } from "@/utils/amazonMetrics";
import { DashboardFilters } from "@/components/dashboard/DashboardFilters";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { KPISection } from "@/components/metrics/KPISection";
import { TACOSChart } from "@/components/metrics/TACOSChart";
import { KeywordRankingTable } from "@/components/metrics/KeywordRankingTable";
import { WorkspaceIntegration } from "@/components/google/WorkspaceIntegration";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    dateRange: "14",
    marketplace: "all",
    category: "all"
  });

  const { data: metricsData, isLoading } = useQuery({
    queryKey: ['metrics', filters],
    queryFn: async () => {
      let query = supabase
        .from('amazon_ads_metrics')
        .select('*');
        
      // Apply date range filter
      if (filters.dateRange !== 'all') {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - parseInt(filters.dateRange));
        query = query.gte('date', startDate.toISOString().split('T')[0]);
      }
      
      // Apply marketplace filter
      if (filters.marketplace !== 'all') {
        query = query.eq('marketplace_string_id', filters.marketplace);
      }
      
      // Apply category filter
      if (filters.category !== 'all') {
        query = query.eq('advertised_product_category', filters.category);
      }

      const { data: metrics, error } = await query.order('date', { ascending: true });
      
      if (error) throw error;

      // Calculate TACoS data
      const tacosData = calculateTacosData(metrics);

      // Calculate keyword rankings
      const keywordData = calculateKeywordRankings(metrics);

      return {
        metrics: calculateMetrics(metrics || []),
        tacosData,
        keywordRankings: keywordData
      };
    }
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        <DashboardFilters onFilterChange={setFilters} />

        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : metricsData?.metrics ? (
          <div className="space-y-6">
            <KPISection
              totalSales={metricsData.metrics.sales?.totalSales || 0}
              totalOrders={metricsData.metrics.sales?.totalOrders || 0}
              roas={metricsData.metrics.performance?.roas || 0}
              conversionRate={metricsData.metrics.performance?.conversionRate || 0}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TACOSChart data={metricsData.tacosData} />
              <KeywordRankingTable rankings={metricsData.keywordRankings} />
            </div>

            <WorkspaceIntegration />

            <AmazonMetricsDisplay metrics={metricsData.metrics} />
            
            <DashboardTabs />
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">No data available. Import your Amazon Ads data to get started.</p>
            <div className="mt-4">
              <DataImport />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

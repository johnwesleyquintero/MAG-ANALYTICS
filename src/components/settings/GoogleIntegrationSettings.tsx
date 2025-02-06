import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";

interface GoogleIntegrationProps {
  initialSettings?: {
    spreadsheetId?: string;
    sheetName?: string;
    autoSync?: boolean;
  };
  onSave: (values: any) => void;
  isLoading?: boolean;
}

export function GoogleIntegrationSettings({ 
  initialSettings,
  onSave,
  isLoading 
}: GoogleIntegrationProps) {
  const [testingConnection, setTestingConnection] = useState(false);
  const form = useForm({
    defaultValues: {
      spreadsheetId: initialSettings?.spreadsheetId || "",
      sheetName: initialSettings?.sheetName || "",
      autoSync: initialSettings?.autoSync || false,
    }
  });

  const testConnection = async () => {
    setTestingConnection(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Connection test successful!");
    } catch (error) {
      toast.error("Connection test failed. Please check your settings.");
    } finally {
      setTestingConnection(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Google Workspace Integration</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
          <FormField
            control={form.control}
            name="spreadsheetId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Google Sheets ID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter spreadsheet ID" />
                </FormControl>
                <FormDescription>
                  The ID of your Google Sheet from the URL
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sheetName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sheet Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="e.g., Sheet1" />
                </FormControl>
                <FormDescription>
                  The name of the specific sheet to sync with
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="autoSync"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Auto Sync</FormLabel>
                  <FormDescription>
                    Automatically sync data with Google Sheets
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={testConnection}
              disabled={testingConnection}
            >
              {testingConnection ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing...
                </>
              ) : (
                'Test Connection'
              )}
            </Button>
            
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Settings'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
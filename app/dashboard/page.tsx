import { ClientDashboard } from "@/components/ClientDashboard";
import { TrainingModules } from "@/components/TrainingModules";
import { AuthGuard } from "@/components/AuthGuard";

export default function Dashboard() {
  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          <ClientDashboard />
          <TrainingModules />
        </div>
      </div>
    </AuthGuard>
  );
}

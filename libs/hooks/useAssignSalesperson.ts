import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// Function to assign a salesperson
const assignSalesperson = async ({ leadId, assignedSalesperson }: { leadId: string; assignedSalesperson: string }) => {
  const response = await axios.patch(`/api/leads/${leadId}`, { assignedSalesperson });
  return response.data;
};

// Custom hook using TanStack React Query
export function useAssignSalesperson() {
  const queryClient = useQueryClient(); // To refetch data after mutation

  return useMutation({
    mutationFn: assignSalesperson,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] }); // Refetch leads after mutation
    },
  });
}

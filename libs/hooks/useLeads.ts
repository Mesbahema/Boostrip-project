import { Lead } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch leads
const fetchLeads = async () => {
  const response = await axios.get<Array<Lead>>("/api/leads");
  return response.data;
};

// Custom hook to get all leads
export function useLeads() {
  return useQuery({
    queryKey: ["leads"], // Unique key for caching
    queryFn: fetchLeads, // Fetch function
  });
}
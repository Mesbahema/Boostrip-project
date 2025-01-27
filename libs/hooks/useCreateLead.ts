import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import errorConst from "@/items/errorConst";

// Function to post data

interface LeadData {
    name: string;
    email: string;
    source: string;
  }
const createLead = async ( arg : LeadData ) => {
    const response = await axios.post("/api/leads", arg,
        {
            headers: {
                "Content-Type": "application/json"
            },
        }
    );
    return response.data;
};

// Custom hook using SWR mutation
export function useCreateLead() {
    return useMutation(
        {
            mutationFn: createLead,
            onError: () => {
                toast.error("server error", errorConst)
            }
        }
    );
}


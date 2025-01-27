import { create } from 'zustand';

type userData = {
    name: string;
    email: string;
}

type inquiryData = {
    source: string
}
interface AppState {
    userData: userData;
    setUserData: (data: userData) => void;
    inquiryData: inquiryData;
    setInquiryData: (data:inquiryData) => void,
}

export const useAppStore = create<AppState>((set) => ({
    userData: {
        name: '',
        email: ''
    },
    setUserData: (data) => set({ userData: data }),
    inquiryData: {
        source: ''
    },
    setInquiryData: (data) =>  set({ inquiryData: data }),
}));
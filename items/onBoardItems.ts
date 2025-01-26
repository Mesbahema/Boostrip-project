import CollectInquiry from "@/components/pages/onboard/onBoardSteps/CollectInquiry";
import Review from "@/components/pages/onboard/onBoardSteps/Review";
import UserData from "@/components/pages/onboard/onBoardSteps/UserData";

export default [
    {
        title: 'Collect Name and Email',
        Component: UserData
    },
    {
        title: 'Collect Inquiry Source',
        Component: CollectInquiry
    },
    {
        title: 'Review',
        Component: Review
    }
]
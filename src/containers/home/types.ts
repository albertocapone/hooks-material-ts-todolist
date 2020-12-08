
export type HeaderProps = {
    resetActivities: () => void,
    openModal: (e: any, kind: string) => void
    disableResetButton: boolean
};


export type ActivitiesListProps = {
    activities: ActivityDetails[],
    openModal: (e: any, kind: string) => void,
    eraseActivity: (e: any) => void,
    editActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};


export type ActivityEntryProps = {
    id: number,
    title: string,
    text: string,
    checked: boolean,
    openModal: (e: any, kind: string) => void,
    editActivity: (e: any) => void,
    eraseActivity: (e: any) => void,
    toggleActivityCheckmark: (e: any) => void
};


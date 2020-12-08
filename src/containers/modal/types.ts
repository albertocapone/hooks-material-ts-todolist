
export type ModalState = {
    isOpen: boolean,
    kind: null | "create" | "edit" | "details",
    contains: null | ActivityDetails,
    action1: { (e: any) : void } | null
};


export type ActivityDetailsModalBodyProps = {
    contains: ActivityDetails
};

export type CreateActivityModalBodyProps = {
    contains: ActivityDetails,
    action1: { (e: any) : void } 
};

export type EditActivityModalBodyProps = {
    contains: ActivityDetails,
    action1: { (e: any) : void } 
};




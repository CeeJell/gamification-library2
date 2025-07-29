declare const _default: {
    title: string;
    component: import("react").FC<import("./types").Props>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        id: {
            description: string;
        };
        profileId: {
            description: string;
        };
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        description: {
            description: string;
            control: {
                type: string;
            };
        };
        picture: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const PageOne: {
    args: {
        title: string;
        description: string;
        picture: string;
        percentage: string;
        id: string;
        profileId: string;
    };
};

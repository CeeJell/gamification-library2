declare const _default: {
    title: string;
    component: import("react").FC<import("./types").Props>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        username: {
            description: string;
            control: {
                type: string;
            };
        };
        profilePicture: {
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
        username: string;
        profilePicture: string;
        children: string;
    };
};

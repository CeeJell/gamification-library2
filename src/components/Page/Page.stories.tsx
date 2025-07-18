import Page from ".";

export default {
    title: "MyComponents/Page",
    component: Page,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            description: "Le title :DDD",
            control: {
                type: "text",
            },
        },
        children: {
            description: "Yoooo",
            control: {
                type: "text",
            },
        },
    },
};

export const PageOne = {
    args: {
        title: "Page one title",
        children: "What the sigma",
    },
};

import ProgressBar from ".";

export default {
    title: "MyComponents/ProgressBar",
    component: ProgressBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        percentage: {
            description: "Percentage of Progress",
            control: {
                type: "number",
            },
        },
    },
};

export const PageOne = {
    args: {
        percentage: 10,
    },
};

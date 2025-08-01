import AchievementList from ".";

export default {
    title: "MyComponents/AchievementList",
    component: AchievementList,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            description: "Place for Achievements to be added",
        },
    },
};

export const PageOne = {
    args: {
        children: "",
    },
};

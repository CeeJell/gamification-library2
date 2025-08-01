import React$1 from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: React$1.FC<PageProps>;

type Props$3 = {
    id: number;
    profileId: number;
    title: string;
    description: string;
    picture: string;
    percentage: number;
    children: React.ReactNode;
};

declare const Achievement: React$1.FC<Props$3>;

type Props$2 = {
    percentage: number;
};

declare const ProgressBar: React$1.FC<Props$2>;

type Props$1 = {
    username: string;
    profilePicture: string;
    children: React.ReactNode;
};

declare const Profile: React$1.FC<Props$1>;

type Props = {
    children: React.ReactNode;
};

declare const AchievementList: React$1.FC<Props>;

export { Achievement, AchievementList, Page, Profile, ProgressBar };

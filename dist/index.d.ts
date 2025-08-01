import React$1 from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: React$1.FC<PageProps>;

type Props$2 = {
    id: number;
    profileId: number;
    title: string;
    description: string;
    picture: string;
    percentage: number;
    children: React.ReactNode;
};

declare const Achievement: React$1.FC<Props$2>;

type Props$1 = {
    percentage: number;
};

declare const ProgressBar: React$1.FC<Props$1>;

type Props = {
    username: string;
    profilePicture: string;
    children: React.ReactNode;
};

declare const Profile: React$1.FC<Props>;

export { Achievement, Page, Profile, ProgressBar };

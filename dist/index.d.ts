import React$1 from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: React$1.FC<PageProps>;

type Props$1 = {
    id: number;
    profileId: number;
    title: string;
    description: string;
    picture: string;
    percentage: number;
};

declare const Achievement: React$1.FC<Props$1>;

type Props = {
    percentage: number;
};

declare const ProgressBar: React$1.FC<Props>;

export { Achievement, Page, ProgressBar };

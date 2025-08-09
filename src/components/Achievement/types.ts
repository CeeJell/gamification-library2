export type Props = {
    id: number;
    profileId: number;
    title: string;
    description: string;
    picture: string;
    percentage: number;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
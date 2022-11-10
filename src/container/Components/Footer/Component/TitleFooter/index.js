import { Title } from "./style";
export const TitleFooter = props => {
    const {name, className} = props
    return(
        <Title className={className}>
            {name}
        </Title>
    );
}
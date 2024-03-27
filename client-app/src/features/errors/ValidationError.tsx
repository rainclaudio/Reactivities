import { Message } from "semantic-ui-react";

interface Props{
    errors: any;

}

export const ValidationError = ({errors} : Props) => {
    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((err: string, i) => (
                        <Message.Item key = {i}>{err}</Message.Item>
                    ))}
                </Message.List>
            )}
        </Message>
    )
}
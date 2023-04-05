import Button from "@mui/material/Button";

const ReusableButton = (props) => {
    const { changeYear, buttonText } = props;
    return (
        <Button variant={props.buttonVariant}
            color={props.buttonColor}
            size={props.buttonSize}
            onClick={() => changeYear(buttonText)}>
            {buttonText}
        </Button>
    )
}
export default ReusableButton;
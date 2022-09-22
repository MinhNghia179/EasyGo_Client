import React from 'react';
interface IProps {
  onPress?: () => void;
}
const PrimaryButton = (props: IProps) => {
  const { onPress } = props;
  return <div>PrimaryButton</div>;
};

export default PrimaryButton;

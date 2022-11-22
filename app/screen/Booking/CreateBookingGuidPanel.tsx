import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BingMap from '../../components/Map/Map';
import { SafeAreaContainer } from '../../components/View';
import { IRootDispatch } from '../../redux/root-store';
import StickyBottomDetailsPanel from './steps/components/StickyBottomDetailsPanel';

interface IProps {}

const CreateBookingGuidPanel = () => {
  const dispatch = useDispatch<IRootDispatch>();

  const [step, setStep] = useState<string>('');

  return (
    <SafeAreaContainer stickyBottom={<StickyBottomDetailsPanel step={step} />}>
      <BingMap />
    </SafeAreaContainer>
  );
};

export default CreateBookingGuidPanel;

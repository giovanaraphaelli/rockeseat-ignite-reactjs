import { HandPalm, Play } from 'phosphor-react';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CyclesContext } from '../../context/CyclesContext';
import { Countdown } from './components/Countdown';
import { NewCycleForm } from './components/NewCycleForm';

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);
  const newCycleForm = useForm({
    defaultValues: { task: '', minutesAmount: 5 },
  });

  const { handleSubmit, watch /*reset*/ } = newCycleForm;

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}

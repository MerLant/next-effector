import Button from '@mui/material/Button';
import { $counter, incrementCounter, decrementCounter, randomCounter } from '@/store/conunter';
import { useUnit } from 'effector-react';

export default function Home() {

  const { counter, onInc, onDec, onRand } = useUnit({
    counter: $counter,
    onInc: incrementCounter,
    onDec: decrementCounter,
    onRand: randomCounter
  });

  return (
    <>
      <Button
        variant="contained"
        onClick={onDec}
      >
        -
      </Button>
      <Button
        variant="contained"
        onClick={onInc}
      >
        +
      </Button>
      <Button
        variant="contained"
        onClick={onRand}
      >
        Random
      </Button>

      {counter}
    </>
  );
}

import { $counter } from '@/store/conunter';
import Button from '@mui/material/Button';
import { useUnit } from 'effector-react';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  const counter = useUnit($counter);
  return (
    <>
      <main>
        <Button
          variant="contained"
          onClick={() => { router.push("/counter") }}
        >
          Каунтер
        </Button>

        {counter}
      </main>
    </>
  );
}

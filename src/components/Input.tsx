import React, { useRef } from 'react';
import Button from './common/Button';
import { todoListStore } from '@/store/store';

const Input = () => {
  console.log('🚀 Input rendered');
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className='f-fr'>
      <input
        ref={input}
        className='rounded-sm border capitalize'
        maxLength={20}
        placeholder='input something...'
      />
      <Button
        intendedColor='secondary'
        size={'md'}
        onClick={() => {
          /**
           * @description external store state => trigger rendering every seconds whenever changes are made to the list(external store state).
           */
          todoListStore.addTodo(
            input.current?.value ? input.current?.value : '',
          );
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Input;

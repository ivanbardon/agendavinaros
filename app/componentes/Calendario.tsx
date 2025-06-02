"use client";

import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { es } from 'date-fns/locale';

export default function Calendario() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      locale={es}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Seleccionado: ${selected.toLocaleDateString()}` : "Elige un día"
      }
    />
  );
}
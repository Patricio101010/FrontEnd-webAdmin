// src/components/molecules/buttons/ActionButtons.tsx

import React from 'react';
import { Button } from '../../Atomos/Button';
import { cn } from '@/lib/utils';

export type ActionKey = | 'procesar' | 'aprobar' | 'guardar'
  | 'buscar'
  | 'nuevo'
  | 'modificar'
  | 'masivo'
  | 'informe'
  | 'imprimir'
  | 'volver'
  | 'ejecutar'
  | 'envio'
  | 'limpiar';

type ButtonConfig = {
  label: string;
  // puedes extender aquí con variant o cualquier otra prop de Button
  className?: string;
};

const buttonConfigs: Record<ActionKey, ButtonConfig> = {
  procesar: { label: 'Procesar', className: 'btn-primary' },
  aprobar: { label: 'Aprobar', className: 'btn-primary' },
  guardar: { label: 'Guardar', className: 'btn-primary' },
  buscar: { label: 'Buscar', className: 'btn-ok' },
  nuevo: { label: 'Nuevo', className: 'btn-prime' },
  modificar: { label: 'Modificar', className: 'btn-prime' },
  masivo: { label: 'Ingreso Masivo', className: 'btn-primary' },
  informe: { label: 'Informe', className: 'btn-primary' },
  imprimir: { label: 'Impr. Neg', className: 'btn-primary' },
  volver: { label: 'Volver', className: 'btn-primary' },
  ejecutar: { label: 'Ejecutar', className: 'btn-primary' },
  envio: { label: 'Envío a Ope.', className: 'btn-primary' },
  limpiar: { label: 'Limpiar', className: 'btn-mora' },
};

export type ActionButtonsProps = {
  buttonsToShow: ActionKey[];
  onAction?: Partial<Record<ActionKey, () => void>>;
  disabled?: Partial<Record<ActionKey, boolean>>;
};

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  buttonsToShow,
  onAction = {},
  disabled = {},
}) => (
  <>
    {buttonsToShow.map((key) => {
      const configuracion = buttonConfigs[key];
      if (!configuracion) return null;
      
      const handleClick = onAction[key] ?? (() => { });
      const isDisabled = disabled[key] ?? false;

      return (
        <Button key={key} onClick={handleClick} className={cn(configuracion.className, 'me-1')} disabled={isDisabled}>
          {configuracion.label}
        </Button>
      );
    })}
  </>
);
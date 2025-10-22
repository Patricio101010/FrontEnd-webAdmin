import { FormProvider, useForm } from "react-hook-form"

import { NumericInput } from "../Componentes/Moleculas/Input/NumericInput"

export default function Ingresos() {
    const methods = useForm()

    return (
        <FormProvider {...methods}>
            <div>
                <h1>Ingresos</h1>

                <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
                    <NumericInput name="monto" label="Monto" placeholder="Ingrese un valor" step={1} />

                    <button
                        type="submit"
                        className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
                    >
                        Guardar
                    </button>
                </form>

                <p>Esta es la página de Ingresos.</p>

                <input
                    type="text"
                    placeholder="Buscar..."
                    className="border border-gray-300 rounded px-2 py-1"
                />
            </div>
        </FormProvider>
    )
}

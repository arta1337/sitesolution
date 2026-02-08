'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-4 text-center">
            <h2 className="mb-4 text-2xl font-bold">Algo correu mal!</h2>
            <p className="mb-6 text-muted-foreground">
                Não foi possível carregar esta secção. Por favor tente novamente.
            </p>
            <button
                onClick={reset}
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
                Tentar novamente
            </button>
        </div>
    );
}

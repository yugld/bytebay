import VerifyEmail from "@/components/emails/VerifyEmail";

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token;
    const toEmail = searchParams.to;

    return (
        <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                {token && typeof token === "string" ? (
                    <div className="grid gap-6">
                        <VerifyEmail token={token} />
                    </div>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <h3 className="font-semibold text-2xl">
                            Проверьте свою почту
                        </h3>

                        {toEmail ? (
                            <p className="text-muted-foreground text-center">
                                Ссылка для подтверждения аккаунта отправлена на{" "}
                                <span className="font-semibold">{toEmail}</span>
                                .
                            </p>
                        ) : (
                            <p className="text-muted-foreground text-center">
                                Мы отправили ссылку для подтверждения аккацнта
                                на укзанный вами email
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerifyEmailPage;

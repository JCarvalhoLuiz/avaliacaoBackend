-- CreateTable
CREATE TABLE "AvaliacaoPrisma" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "AvaliacaoPrisma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AvaliacaoPrisma_email_key" ON "AvaliacaoPrisma"("email");

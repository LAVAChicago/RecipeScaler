-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "recipe_id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "tags" TEXT[],
    "creating_user_id" INTEGER NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,
    "date_last_edited" TIMESTAMP(3) NOT NULL,
    "portions" INTEGER NOT NULL,
    "chefs_notes" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("recipe_id")
);

-- CreateTable
CREATE TABLE "ComponentPart" (
    "component_part_id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,

    CONSTRAINT "ComponentPart_pkey" PRIMARY KEY ("component_part_id")
);

-- CreateTable
CREATE TABLE "Step" (
    "step_id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("step_id")
);

-- CreateTable
CREATE TABLE "Tool" (
    "tool_id" SERIAL NOT NULL,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("tool_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" SERIAL NOT NULL,
    "recipe_id" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_creating_user_id_fkey" FOREIGN KEY ("creating_user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComponentPart" ADD CONSTRAINT "ComponentPart_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("recipe_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

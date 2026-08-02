import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SavedDesignModel = runtime.Types.Result.DefaultSelection<Prisma.$SavedDesignPayload>;
export type AggregateSavedDesign = {
    _count: SavedDesignCountAggregateOutputType | null;
    _avg: SavedDesignAvgAggregateOutputType | null;
    _sum: SavedDesignSumAggregateOutputType | null;
    _min: SavedDesignMinAggregateOutputType | null;
    _max: SavedDesignMaxAggregateOutputType | null;
};
export type SavedDesignAvgAggregateOutputType = {
    product_id: number | null;
};
export type SavedDesignSumAggregateOutputType = {
    product_id: number | null;
};
export type SavedDesignMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    product_id: number | null;
    created_at: Date | null;
};
export type SavedDesignMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    product_id: number | null;
    created_at: Date | null;
};
export type SavedDesignCountAggregateOutputType = {
    id: number;
    user_id: number;
    product_id: number;
    created_at: number;
    _all: number;
};
export type SavedDesignAvgAggregateInputType = {
    product_id?: true;
};
export type SavedDesignSumAggregateInputType = {
    product_id?: true;
};
export type SavedDesignMinAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    created_at?: true;
};
export type SavedDesignMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    created_at?: true;
};
export type SavedDesignCountAggregateInputType = {
    id?: true;
    user_id?: true;
    product_id?: true;
    created_at?: true;
    _all?: true;
};
export type SavedDesignAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedDesignWhereInput;
    orderBy?: Prisma.SavedDesignOrderByWithRelationInput | Prisma.SavedDesignOrderByWithRelationInput[];
    cursor?: Prisma.SavedDesignWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SavedDesignCountAggregateInputType;
    _avg?: SavedDesignAvgAggregateInputType;
    _sum?: SavedDesignSumAggregateInputType;
    _min?: SavedDesignMinAggregateInputType;
    _max?: SavedDesignMaxAggregateInputType;
};
export type GetSavedDesignAggregateType<T extends SavedDesignAggregateArgs> = {
    [P in keyof T & keyof AggregateSavedDesign]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSavedDesign[P]> : Prisma.GetScalarType<T[P], AggregateSavedDesign[P]>;
};
export type SavedDesignGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedDesignWhereInput;
    orderBy?: Prisma.SavedDesignOrderByWithAggregationInput | Prisma.SavedDesignOrderByWithAggregationInput[];
    by: Prisma.SavedDesignScalarFieldEnum[] | Prisma.SavedDesignScalarFieldEnum;
    having?: Prisma.SavedDesignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SavedDesignCountAggregateInputType | true;
    _avg?: SavedDesignAvgAggregateInputType;
    _sum?: SavedDesignSumAggregateInputType;
    _min?: SavedDesignMinAggregateInputType;
    _max?: SavedDesignMaxAggregateInputType;
};
export type SavedDesignGroupByOutputType = {
    id: string;
    user_id: string;
    product_id: number;
    created_at: Date;
    _count: SavedDesignCountAggregateOutputType | null;
    _avg: SavedDesignAvgAggregateOutputType | null;
    _sum: SavedDesignSumAggregateOutputType | null;
    _min: SavedDesignMinAggregateOutputType | null;
    _max: SavedDesignMaxAggregateOutputType | null;
};
export type GetSavedDesignGroupByPayload<T extends SavedDesignGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SavedDesignGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SavedDesignGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SavedDesignGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SavedDesignGroupByOutputType[P]>;
}>>;
export type SavedDesignWhereInput = {
    AND?: Prisma.SavedDesignWhereInput | Prisma.SavedDesignWhereInput[];
    OR?: Prisma.SavedDesignWhereInput[];
    NOT?: Prisma.SavedDesignWhereInput | Prisma.SavedDesignWhereInput[];
    id?: Prisma.StringFilter<"SavedDesign"> | string;
    user_id?: Prisma.StringFilter<"SavedDesign"> | string;
    product_id?: Prisma.IntFilter<"SavedDesign"> | number;
    created_at?: Prisma.DateTimeFilter<"SavedDesign"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type SavedDesignOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type SavedDesignWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_product_id?: Prisma.SavedDesignUser_idProduct_idCompoundUniqueInput;
    AND?: Prisma.SavedDesignWhereInput | Prisma.SavedDesignWhereInput[];
    OR?: Prisma.SavedDesignWhereInput[];
    NOT?: Prisma.SavedDesignWhereInput | Prisma.SavedDesignWhereInput[];
    user_id?: Prisma.StringFilter<"SavedDesign"> | string;
    product_id?: Prisma.IntFilter<"SavedDesign"> | number;
    created_at?: Prisma.DateTimeFilter<"SavedDesign"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "user_id_product_id">;
export type SavedDesignOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.SavedDesignCountOrderByAggregateInput;
    _avg?: Prisma.SavedDesignAvgOrderByAggregateInput;
    _max?: Prisma.SavedDesignMaxOrderByAggregateInput;
    _min?: Prisma.SavedDesignMinOrderByAggregateInput;
    _sum?: Prisma.SavedDesignSumOrderByAggregateInput;
};
export type SavedDesignScalarWhereWithAggregatesInput = {
    AND?: Prisma.SavedDesignScalarWhereWithAggregatesInput | Prisma.SavedDesignScalarWhereWithAggregatesInput[];
    OR?: Prisma.SavedDesignScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SavedDesignScalarWhereWithAggregatesInput | Prisma.SavedDesignScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SavedDesign"> | string;
    user_id?: Prisma.StringWithAggregatesFilter<"SavedDesign"> | string;
    product_id?: Prisma.IntWithAggregatesFilter<"SavedDesign"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"SavedDesign"> | Date | string;
};
export type SavedDesignCreateInput = {
    id?: string;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSaved_designsInput;
    product: Prisma.ProductCreateNestedOneWithoutSavedDesignsInput;
};
export type SavedDesignUncheckedCreateInput = {
    id?: string;
    user_id: string;
    product_id: number;
    created_at?: Date | string;
};
export type SavedDesignUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSaved_designsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutSavedDesignsNestedInput;
};
export type SavedDesignUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDesignCreateManyInput = {
    id?: string;
    user_id: string;
    product_id: number;
    created_at?: Date | string;
};
export type SavedDesignUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDesignUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDesignListRelationFilter = {
    every?: Prisma.SavedDesignWhereInput;
    some?: Prisma.SavedDesignWhereInput;
    none?: Prisma.SavedDesignWhereInput;
};
export type SavedDesignOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SavedDesignUser_idProduct_idCompoundUniqueInput = {
    user_id: string;
    product_id: number;
};
export type SavedDesignCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SavedDesignAvgOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
};
export type SavedDesignMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SavedDesignMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SavedDesignSumOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
};
export type SavedDesignCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutProductInput, Prisma.SavedDesignUncheckedCreateWithoutProductInput> | Prisma.SavedDesignCreateWithoutProductInput[] | Prisma.SavedDesignUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutProductInput | Prisma.SavedDesignCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.SavedDesignCreateManyProductInputEnvelope;
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
};
export type SavedDesignUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutProductInput, Prisma.SavedDesignUncheckedCreateWithoutProductInput> | Prisma.SavedDesignCreateWithoutProductInput[] | Prisma.SavedDesignUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutProductInput | Prisma.SavedDesignCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.SavedDesignCreateManyProductInputEnvelope;
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
};
export type SavedDesignUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutProductInput, Prisma.SavedDesignUncheckedCreateWithoutProductInput> | Prisma.SavedDesignCreateWithoutProductInput[] | Prisma.SavedDesignUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutProductInput | Prisma.SavedDesignCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.SavedDesignUpsertWithWhereUniqueWithoutProductInput | Prisma.SavedDesignUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.SavedDesignCreateManyProductInputEnvelope;
    set?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    disconnect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    delete?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    update?: Prisma.SavedDesignUpdateWithWhereUniqueWithoutProductInput | Prisma.SavedDesignUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.SavedDesignUpdateManyWithWhereWithoutProductInput | Prisma.SavedDesignUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.SavedDesignScalarWhereInput | Prisma.SavedDesignScalarWhereInput[];
};
export type SavedDesignUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutProductInput, Prisma.SavedDesignUncheckedCreateWithoutProductInput> | Prisma.SavedDesignCreateWithoutProductInput[] | Prisma.SavedDesignUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutProductInput | Prisma.SavedDesignCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.SavedDesignUpsertWithWhereUniqueWithoutProductInput | Prisma.SavedDesignUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.SavedDesignCreateManyProductInputEnvelope;
    set?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    disconnect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    delete?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    update?: Prisma.SavedDesignUpdateWithWhereUniqueWithoutProductInput | Prisma.SavedDesignUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.SavedDesignUpdateManyWithWhereWithoutProductInput | Prisma.SavedDesignUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.SavedDesignScalarWhereInput | Prisma.SavedDesignScalarWhereInput[];
};
export type SavedDesignCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutUserInput, Prisma.SavedDesignUncheckedCreateWithoutUserInput> | Prisma.SavedDesignCreateWithoutUserInput[] | Prisma.SavedDesignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutUserInput | Prisma.SavedDesignCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedDesignCreateManyUserInputEnvelope;
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
};
export type SavedDesignUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutUserInput, Prisma.SavedDesignUncheckedCreateWithoutUserInput> | Prisma.SavedDesignCreateWithoutUserInput[] | Prisma.SavedDesignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutUserInput | Prisma.SavedDesignCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SavedDesignCreateManyUserInputEnvelope;
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
};
export type SavedDesignUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutUserInput, Prisma.SavedDesignUncheckedCreateWithoutUserInput> | Prisma.SavedDesignCreateWithoutUserInput[] | Prisma.SavedDesignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutUserInput | Prisma.SavedDesignCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedDesignUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedDesignUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedDesignCreateManyUserInputEnvelope;
    set?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    disconnect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    delete?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    update?: Prisma.SavedDesignUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedDesignUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedDesignUpdateManyWithWhereWithoutUserInput | Prisma.SavedDesignUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedDesignScalarWhereInput | Prisma.SavedDesignScalarWhereInput[];
};
export type SavedDesignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SavedDesignCreateWithoutUserInput, Prisma.SavedDesignUncheckedCreateWithoutUserInput> | Prisma.SavedDesignCreateWithoutUserInput[] | Prisma.SavedDesignUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SavedDesignCreateOrConnectWithoutUserInput | Prisma.SavedDesignCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SavedDesignUpsertWithWhereUniqueWithoutUserInput | Prisma.SavedDesignUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SavedDesignCreateManyUserInputEnvelope;
    set?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    disconnect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    delete?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    connect?: Prisma.SavedDesignWhereUniqueInput | Prisma.SavedDesignWhereUniqueInput[];
    update?: Prisma.SavedDesignUpdateWithWhereUniqueWithoutUserInput | Prisma.SavedDesignUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SavedDesignUpdateManyWithWhereWithoutUserInput | Prisma.SavedDesignUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SavedDesignScalarWhereInput | Prisma.SavedDesignScalarWhereInput[];
};
export type SavedDesignCreateWithoutProductInput = {
    id?: string;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSaved_designsInput;
};
export type SavedDesignUncheckedCreateWithoutProductInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
};
export type SavedDesignCreateOrConnectWithoutProductInput = {
    where: Prisma.SavedDesignWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedDesignCreateWithoutProductInput, Prisma.SavedDesignUncheckedCreateWithoutProductInput>;
};
export type SavedDesignCreateManyProductInputEnvelope = {
    data: Prisma.SavedDesignCreateManyProductInput | Prisma.SavedDesignCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type SavedDesignUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.SavedDesignWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedDesignUpdateWithoutProductInput, Prisma.SavedDesignUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.SavedDesignCreateWithoutProductInput, Prisma.SavedDesignUncheckedCreateWithoutProductInput>;
};
export type SavedDesignUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.SavedDesignWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedDesignUpdateWithoutProductInput, Prisma.SavedDesignUncheckedUpdateWithoutProductInput>;
};
export type SavedDesignUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.SavedDesignScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedDesignUpdateManyMutationInput, Prisma.SavedDesignUncheckedUpdateManyWithoutProductInput>;
};
export type SavedDesignScalarWhereInput = {
    AND?: Prisma.SavedDesignScalarWhereInput | Prisma.SavedDesignScalarWhereInput[];
    OR?: Prisma.SavedDesignScalarWhereInput[];
    NOT?: Prisma.SavedDesignScalarWhereInput | Prisma.SavedDesignScalarWhereInput[];
    id?: Prisma.StringFilter<"SavedDesign"> | string;
    user_id?: Prisma.StringFilter<"SavedDesign"> | string;
    product_id?: Prisma.IntFilter<"SavedDesign"> | number;
    created_at?: Prisma.DateTimeFilter<"SavedDesign"> | Date | string;
};
export type SavedDesignCreateWithoutUserInput = {
    id?: string;
    created_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutSavedDesignsInput;
};
export type SavedDesignUncheckedCreateWithoutUserInput = {
    id?: string;
    product_id: number;
    created_at?: Date | string;
};
export type SavedDesignCreateOrConnectWithoutUserInput = {
    where: Prisma.SavedDesignWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedDesignCreateWithoutUserInput, Prisma.SavedDesignUncheckedCreateWithoutUserInput>;
};
export type SavedDesignCreateManyUserInputEnvelope = {
    data: Prisma.SavedDesignCreateManyUserInput | Prisma.SavedDesignCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SavedDesignUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedDesignWhereUniqueInput;
    update: Prisma.XOR<Prisma.SavedDesignUpdateWithoutUserInput, Prisma.SavedDesignUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SavedDesignCreateWithoutUserInput, Prisma.SavedDesignUncheckedCreateWithoutUserInput>;
};
export type SavedDesignUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SavedDesignWhereUniqueInput;
    data: Prisma.XOR<Prisma.SavedDesignUpdateWithoutUserInput, Prisma.SavedDesignUncheckedUpdateWithoutUserInput>;
};
export type SavedDesignUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SavedDesignScalarWhereInput;
    data: Prisma.XOR<Prisma.SavedDesignUpdateManyMutationInput, Prisma.SavedDesignUncheckedUpdateManyWithoutUserInput>;
};
export type SavedDesignCreateManyProductInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
};
export type SavedDesignUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSaved_designsNestedInput;
};
export type SavedDesignUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDesignUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDesignCreateManyUserInput = {
    id?: string;
    product_id: number;
    created_at?: Date | string;
};
export type SavedDesignUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutSavedDesignsNestedInput;
};
export type SavedDesignUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDesignUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SavedDesignSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    product_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedDesign"]>;
export type SavedDesignSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    product_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedDesign"]>;
export type SavedDesignSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    product_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["savedDesign"]>;
export type SavedDesignSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    product_id?: boolean;
    created_at?: boolean;
};
export type SavedDesignOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "product_id" | "created_at", ExtArgs["result"]["savedDesign"]>;
export type SavedDesignInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type SavedDesignIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type SavedDesignIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $SavedDesignPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SavedDesign";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        product_id: number;
        created_at: Date;
    }, ExtArgs["result"]["savedDesign"]>;
    composites: {};
};
export type SavedDesignGetPayload<S extends boolean | null | undefined | SavedDesignDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload, S>;
export type SavedDesignCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SavedDesignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SavedDesignCountAggregateInputType | true;
};
export interface SavedDesignDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SavedDesign'];
        meta: {
            name: 'SavedDesign';
        };
    };
    findUnique<T extends SavedDesignFindUniqueArgs>(args: Prisma.SelectSubset<T, SavedDesignFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SavedDesignFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SavedDesignFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SavedDesignFindFirstArgs>(args?: Prisma.SelectSubset<T, SavedDesignFindFirstArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SavedDesignFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SavedDesignFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SavedDesignFindManyArgs>(args?: Prisma.SelectSubset<T, SavedDesignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SavedDesignCreateArgs>(args: Prisma.SelectSubset<T, SavedDesignCreateArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SavedDesignCreateManyArgs>(args?: Prisma.SelectSubset<T, SavedDesignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SavedDesignCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SavedDesignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SavedDesignDeleteArgs>(args: Prisma.SelectSubset<T, SavedDesignDeleteArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SavedDesignUpdateArgs>(args: Prisma.SelectSubset<T, SavedDesignUpdateArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SavedDesignDeleteManyArgs>(args?: Prisma.SelectSubset<T, SavedDesignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SavedDesignUpdateManyArgs>(args: Prisma.SelectSubset<T, SavedDesignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SavedDesignUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SavedDesignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SavedDesignUpsertArgs>(args: Prisma.SelectSubset<T, SavedDesignUpsertArgs<ExtArgs>>): Prisma.Prisma__SavedDesignClient<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SavedDesignCountArgs>(args?: Prisma.Subset<T, SavedDesignCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SavedDesignCountAggregateOutputType> : number>;
    aggregate<T extends SavedDesignAggregateArgs>(args: Prisma.Subset<T, SavedDesignAggregateArgs>): Prisma.PrismaPromise<GetSavedDesignAggregateType<T>>;
    groupBy<T extends SavedDesignGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SavedDesignGroupByArgs['orderBy'];
    } : {
        orderBy?: SavedDesignGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SavedDesignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedDesignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SavedDesignFieldRefs;
}
export interface Prisma__SavedDesignClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SavedDesignFieldRefs {
    readonly id: Prisma.FieldRef<"SavedDesign", 'String'>;
    readonly user_id: Prisma.FieldRef<"SavedDesign", 'String'>;
    readonly product_id: Prisma.FieldRef<"SavedDesign", 'Int'>;
    readonly created_at: Prisma.FieldRef<"SavedDesign", 'DateTime'>;
}
export type SavedDesignFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    where: Prisma.SavedDesignWhereUniqueInput;
};
export type SavedDesignFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    where: Prisma.SavedDesignWhereUniqueInput;
};
export type SavedDesignFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    where?: Prisma.SavedDesignWhereInput;
    orderBy?: Prisma.SavedDesignOrderByWithRelationInput | Prisma.SavedDesignOrderByWithRelationInput[];
    cursor?: Prisma.SavedDesignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedDesignScalarFieldEnum | Prisma.SavedDesignScalarFieldEnum[];
};
export type SavedDesignFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    where?: Prisma.SavedDesignWhereInput;
    orderBy?: Prisma.SavedDesignOrderByWithRelationInput | Prisma.SavedDesignOrderByWithRelationInput[];
    cursor?: Prisma.SavedDesignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedDesignScalarFieldEnum | Prisma.SavedDesignScalarFieldEnum[];
};
export type SavedDesignFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    where?: Prisma.SavedDesignWhereInput;
    orderBy?: Prisma.SavedDesignOrderByWithRelationInput | Prisma.SavedDesignOrderByWithRelationInput[];
    cursor?: Prisma.SavedDesignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SavedDesignScalarFieldEnum | Prisma.SavedDesignScalarFieldEnum[];
};
export type SavedDesignCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedDesignCreateInput, Prisma.SavedDesignUncheckedCreateInput>;
};
export type SavedDesignCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SavedDesignCreateManyInput | Prisma.SavedDesignCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SavedDesignCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    data: Prisma.SavedDesignCreateManyInput | Prisma.SavedDesignCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SavedDesignIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SavedDesignUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedDesignUpdateInput, Prisma.SavedDesignUncheckedUpdateInput>;
    where: Prisma.SavedDesignWhereUniqueInput;
};
export type SavedDesignUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SavedDesignUpdateManyMutationInput, Prisma.SavedDesignUncheckedUpdateManyInput>;
    where?: Prisma.SavedDesignWhereInput;
    limit?: number;
};
export type SavedDesignUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SavedDesignUpdateManyMutationInput, Prisma.SavedDesignUncheckedUpdateManyInput>;
    where?: Prisma.SavedDesignWhereInput;
    limit?: number;
    include?: Prisma.SavedDesignIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SavedDesignUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    where: Prisma.SavedDesignWhereUniqueInput;
    create: Prisma.XOR<Prisma.SavedDesignCreateInput, Prisma.SavedDesignUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SavedDesignUpdateInput, Prisma.SavedDesignUncheckedUpdateInput>;
};
export type SavedDesignDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
    where: Prisma.SavedDesignWhereUniqueInput;
};
export type SavedDesignDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedDesignWhereInput;
    limit?: number;
};
export type SavedDesignDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SavedDesignSelect<ExtArgs> | null;
    omit?: Prisma.SavedDesignOmit<ExtArgs> | null;
    include?: Prisma.SavedDesignInclude<ExtArgs> | null;
};

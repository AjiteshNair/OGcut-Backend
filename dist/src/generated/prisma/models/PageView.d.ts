import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PageViewModel = runtime.Types.Result.DefaultSelection<Prisma.$PageViewPayload>;
export type AggregatePageView = {
    _count: PageViewCountAggregateOutputType | null;
    _avg: PageViewAvgAggregateOutputType | null;
    _sum: PageViewSumAggregateOutputType | null;
    _min: PageViewMinAggregateOutputType | null;
    _max: PageViewMaxAggregateOutputType | null;
};
export type PageViewAvgAggregateOutputType = {
    duration_seconds: number | null;
};
export type PageViewSumAggregateOutputType = {
    duration_seconds: number | null;
};
export type PageViewMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    session_id: string | null;
    page_path: string | null;
    duration_seconds: number | null;
    created_at: Date | null;
};
export type PageViewMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    session_id: string | null;
    page_path: string | null;
    duration_seconds: number | null;
    created_at: Date | null;
};
export type PageViewCountAggregateOutputType = {
    id: number;
    user_id: number;
    session_id: number;
    page_path: number;
    duration_seconds: number;
    created_at: number;
    _all: number;
};
export type PageViewAvgAggregateInputType = {
    duration_seconds?: true;
};
export type PageViewSumAggregateInputType = {
    duration_seconds?: true;
};
export type PageViewMinAggregateInputType = {
    id?: true;
    user_id?: true;
    session_id?: true;
    page_path?: true;
    duration_seconds?: true;
    created_at?: true;
};
export type PageViewMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    session_id?: true;
    page_path?: true;
    duration_seconds?: true;
    created_at?: true;
};
export type PageViewCountAggregateInputType = {
    id?: true;
    user_id?: true;
    session_id?: true;
    page_path?: true;
    duration_seconds?: true;
    created_at?: true;
    _all?: true;
};
export type PageViewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageViewWhereInput;
    orderBy?: Prisma.PageViewOrderByWithRelationInput | Prisma.PageViewOrderByWithRelationInput[];
    cursor?: Prisma.PageViewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PageViewCountAggregateInputType;
    _avg?: PageViewAvgAggregateInputType;
    _sum?: PageViewSumAggregateInputType;
    _min?: PageViewMinAggregateInputType;
    _max?: PageViewMaxAggregateInputType;
};
export type GetPageViewAggregateType<T extends PageViewAggregateArgs> = {
    [P in keyof T & keyof AggregatePageView]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePageView[P]> : Prisma.GetScalarType<T[P], AggregatePageView[P]>;
};
export type PageViewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageViewWhereInput;
    orderBy?: Prisma.PageViewOrderByWithAggregationInput | Prisma.PageViewOrderByWithAggregationInput[];
    by: Prisma.PageViewScalarFieldEnum[] | Prisma.PageViewScalarFieldEnum;
    having?: Prisma.PageViewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PageViewCountAggregateInputType | true;
    _avg?: PageViewAvgAggregateInputType;
    _sum?: PageViewSumAggregateInputType;
    _min?: PageViewMinAggregateInputType;
    _max?: PageViewMaxAggregateInputType;
};
export type PageViewGroupByOutputType = {
    id: string;
    user_id: string | null;
    session_id: string;
    page_path: string;
    duration_seconds: number;
    created_at: Date;
    _count: PageViewCountAggregateOutputType | null;
    _avg: PageViewAvgAggregateOutputType | null;
    _sum: PageViewSumAggregateOutputType | null;
    _min: PageViewMinAggregateOutputType | null;
    _max: PageViewMaxAggregateOutputType | null;
};
export type GetPageViewGroupByPayload<T extends PageViewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PageViewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PageViewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PageViewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PageViewGroupByOutputType[P]>;
}>>;
export type PageViewWhereInput = {
    AND?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
    OR?: Prisma.PageViewWhereInput[];
    NOT?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
    id?: Prisma.StringFilter<"PageView"> | string;
    user_id?: Prisma.StringNullableFilter<"PageView"> | string | null;
    session_id?: Prisma.StringFilter<"PageView"> | string;
    page_path?: Prisma.StringFilter<"PageView"> | string;
    duration_seconds?: Prisma.IntFilter<"PageView"> | number;
    created_at?: Prisma.DateTimeFilter<"PageView"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type PageViewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    page_path?: Prisma.SortOrder;
    duration_seconds?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type PageViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
    OR?: Prisma.PageViewWhereInput[];
    NOT?: Prisma.PageViewWhereInput | Prisma.PageViewWhereInput[];
    user_id?: Prisma.StringNullableFilter<"PageView"> | string | null;
    session_id?: Prisma.StringFilter<"PageView"> | string;
    page_path?: Prisma.StringFilter<"PageView"> | string;
    duration_seconds?: Prisma.IntFilter<"PageView"> | number;
    created_at?: Prisma.DateTimeFilter<"PageView"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type PageViewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    page_path?: Prisma.SortOrder;
    duration_seconds?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.PageViewCountOrderByAggregateInput;
    _avg?: Prisma.PageViewAvgOrderByAggregateInput;
    _max?: Prisma.PageViewMaxOrderByAggregateInput;
    _min?: Prisma.PageViewMinOrderByAggregateInput;
    _sum?: Prisma.PageViewSumOrderByAggregateInput;
};
export type PageViewScalarWhereWithAggregatesInput = {
    AND?: Prisma.PageViewScalarWhereWithAggregatesInput | Prisma.PageViewScalarWhereWithAggregatesInput[];
    OR?: Prisma.PageViewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PageViewScalarWhereWithAggregatesInput | Prisma.PageViewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PageView"> | string;
    user_id?: Prisma.StringNullableWithAggregatesFilter<"PageView"> | string | null;
    session_id?: Prisma.StringWithAggregatesFilter<"PageView"> | string;
    page_path?: Prisma.StringWithAggregatesFilter<"PageView"> | string;
    duration_seconds?: Prisma.IntWithAggregatesFilter<"PageView"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"PageView"> | Date | string;
};
export type PageViewCreateInput = {
    id?: string;
    session_id: string;
    page_path: string;
    duration_seconds?: number;
    created_at?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutPage_viewsInput;
};
export type PageViewUncheckedCreateInput = {
    id?: string;
    user_id?: string | null;
    session_id: string;
    page_path: string;
    duration_seconds?: number;
    created_at?: Date | string;
};
export type PageViewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    page_path?: Prisma.StringFieldUpdateOperationsInput | string;
    duration_seconds?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutPage_viewsNestedInput;
};
export type PageViewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    page_path?: Prisma.StringFieldUpdateOperationsInput | string;
    duration_seconds?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageViewCreateManyInput = {
    id?: string;
    user_id?: string | null;
    session_id: string;
    page_path: string;
    duration_seconds?: number;
    created_at?: Date | string;
};
export type PageViewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    page_path?: Prisma.StringFieldUpdateOperationsInput | string;
    duration_seconds?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageViewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    page_path?: Prisma.StringFieldUpdateOperationsInput | string;
    duration_seconds?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageViewListRelationFilter = {
    every?: Prisma.PageViewWhereInput;
    some?: Prisma.PageViewWhereInput;
    none?: Prisma.PageViewWhereInput;
};
export type PageViewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PageViewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    page_path?: Prisma.SortOrder;
    duration_seconds?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type PageViewAvgOrderByAggregateInput = {
    duration_seconds?: Prisma.SortOrder;
};
export type PageViewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    page_path?: Prisma.SortOrder;
    duration_seconds?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type PageViewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    session_id?: Prisma.SortOrder;
    page_path?: Prisma.SortOrder;
    duration_seconds?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type PageViewSumOrderByAggregateInput = {
    duration_seconds?: Prisma.SortOrder;
};
export type PageViewCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PageViewCreateWithoutUserInput, Prisma.PageViewUncheckedCreateWithoutUserInput> | Prisma.PageViewCreateWithoutUserInput[] | Prisma.PageViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PageViewCreateOrConnectWithoutUserInput | Prisma.PageViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PageViewCreateManyUserInputEnvelope;
    connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
};
export type PageViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PageViewCreateWithoutUserInput, Prisma.PageViewUncheckedCreateWithoutUserInput> | Prisma.PageViewCreateWithoutUserInput[] | Prisma.PageViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PageViewCreateOrConnectWithoutUserInput | Prisma.PageViewCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PageViewCreateManyUserInputEnvelope;
    connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
};
export type PageViewUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PageViewCreateWithoutUserInput, Prisma.PageViewUncheckedCreateWithoutUserInput> | Prisma.PageViewCreateWithoutUserInput[] | Prisma.PageViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PageViewCreateOrConnectWithoutUserInput | Prisma.PageViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PageViewUpsertWithWhereUniqueWithoutUserInput | Prisma.PageViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PageViewCreateManyUserInputEnvelope;
    set?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    disconnect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    delete?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    update?: Prisma.PageViewUpdateWithWhereUniqueWithoutUserInput | Prisma.PageViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PageViewUpdateManyWithWhereWithoutUserInput | Prisma.PageViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PageViewScalarWhereInput | Prisma.PageViewScalarWhereInput[];
};
export type PageViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PageViewCreateWithoutUserInput, Prisma.PageViewUncheckedCreateWithoutUserInput> | Prisma.PageViewCreateWithoutUserInput[] | Prisma.PageViewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PageViewCreateOrConnectWithoutUserInput | Prisma.PageViewCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PageViewUpsertWithWhereUniqueWithoutUserInput | Prisma.PageViewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PageViewCreateManyUserInputEnvelope;
    set?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    disconnect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    delete?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    connect?: Prisma.PageViewWhereUniqueInput | Prisma.PageViewWhereUniqueInput[];
    update?: Prisma.PageViewUpdateWithWhereUniqueWithoutUserInput | Prisma.PageViewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PageViewUpdateManyWithWhereWithoutUserInput | Prisma.PageViewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PageViewScalarWhereInput | Prisma.PageViewScalarWhereInput[];
};
export type PageViewCreateWithoutUserInput = {
    id?: string;
    session_id: string;
    page_path: string;
    duration_seconds?: number;
    created_at?: Date | string;
};
export type PageViewUncheckedCreateWithoutUserInput = {
    id?: string;
    session_id: string;
    page_path: string;
    duration_seconds?: number;
    created_at?: Date | string;
};
export type PageViewCreateOrConnectWithoutUserInput = {
    where: Prisma.PageViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PageViewCreateWithoutUserInput, Prisma.PageViewUncheckedCreateWithoutUserInput>;
};
export type PageViewCreateManyUserInputEnvelope = {
    data: Prisma.PageViewCreateManyUserInput | Prisma.PageViewCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PageViewUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PageViewWhereUniqueInput;
    update: Prisma.XOR<Prisma.PageViewUpdateWithoutUserInput, Prisma.PageViewUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PageViewCreateWithoutUserInput, Prisma.PageViewUncheckedCreateWithoutUserInput>;
};
export type PageViewUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PageViewWhereUniqueInput;
    data: Prisma.XOR<Prisma.PageViewUpdateWithoutUserInput, Prisma.PageViewUncheckedUpdateWithoutUserInput>;
};
export type PageViewUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PageViewScalarWhereInput;
    data: Prisma.XOR<Prisma.PageViewUpdateManyMutationInput, Prisma.PageViewUncheckedUpdateManyWithoutUserInput>;
};
export type PageViewScalarWhereInput = {
    AND?: Prisma.PageViewScalarWhereInput | Prisma.PageViewScalarWhereInput[];
    OR?: Prisma.PageViewScalarWhereInput[];
    NOT?: Prisma.PageViewScalarWhereInput | Prisma.PageViewScalarWhereInput[];
    id?: Prisma.StringFilter<"PageView"> | string;
    user_id?: Prisma.StringNullableFilter<"PageView"> | string | null;
    session_id?: Prisma.StringFilter<"PageView"> | string;
    page_path?: Prisma.StringFilter<"PageView"> | string;
    duration_seconds?: Prisma.IntFilter<"PageView"> | number;
    created_at?: Prisma.DateTimeFilter<"PageView"> | Date | string;
};
export type PageViewCreateManyUserInput = {
    id?: string;
    session_id: string;
    page_path: string;
    duration_seconds?: number;
    created_at?: Date | string;
};
export type PageViewUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    page_path?: Prisma.StringFieldUpdateOperationsInput | string;
    duration_seconds?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageViewUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    page_path?: Prisma.StringFieldUpdateOperationsInput | string;
    duration_seconds?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageViewUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    session_id?: Prisma.StringFieldUpdateOperationsInput | string;
    page_path?: Prisma.StringFieldUpdateOperationsInput | string;
    duration_seconds?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageViewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    session_id?: boolean;
    page_path?: boolean;
    duration_seconds?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.PageView$userArgs<ExtArgs>;
}, ExtArgs["result"]["pageView"]>;
export type PageViewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    session_id?: boolean;
    page_path?: boolean;
    duration_seconds?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.PageView$userArgs<ExtArgs>;
}, ExtArgs["result"]["pageView"]>;
export type PageViewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    session_id?: boolean;
    page_path?: boolean;
    duration_seconds?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.PageView$userArgs<ExtArgs>;
}, ExtArgs["result"]["pageView"]>;
export type PageViewSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    session_id?: boolean;
    page_path?: boolean;
    duration_seconds?: boolean;
    created_at?: boolean;
};
export type PageViewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "session_id" | "page_path" | "duration_seconds" | "created_at", ExtArgs["result"]["pageView"]>;
export type PageViewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.PageView$userArgs<ExtArgs>;
};
export type PageViewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.PageView$userArgs<ExtArgs>;
};
export type PageViewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.PageView$userArgs<ExtArgs>;
};
export type $PageViewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PageView";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string | null;
        session_id: string;
        page_path: string;
        duration_seconds: number;
        created_at: Date;
    }, ExtArgs["result"]["pageView"]>;
    composites: {};
};
export type PageViewGetPayload<S extends boolean | null | undefined | PageViewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PageViewPayload, S>;
export type PageViewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PageViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PageViewCountAggregateInputType | true;
};
export interface PageViewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PageView'];
        meta: {
            name: 'PageView';
        };
    };
    findUnique<T extends PageViewFindUniqueArgs>(args: Prisma.SelectSubset<T, PageViewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PageViewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PageViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PageViewFindFirstArgs>(args?: Prisma.SelectSubset<T, PageViewFindFirstArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PageViewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PageViewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PageViewFindManyArgs>(args?: Prisma.SelectSubset<T, PageViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PageViewCreateArgs>(args: Prisma.SelectSubset<T, PageViewCreateArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PageViewCreateManyArgs>(args?: Prisma.SelectSubset<T, PageViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PageViewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PageViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PageViewDeleteArgs>(args: Prisma.SelectSubset<T, PageViewDeleteArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PageViewUpdateArgs>(args: Prisma.SelectSubset<T, PageViewUpdateArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PageViewDeleteManyArgs>(args?: Prisma.SelectSubset<T, PageViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PageViewUpdateManyArgs>(args: Prisma.SelectSubset<T, PageViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PageViewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PageViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PageViewUpsertArgs>(args: Prisma.SelectSubset<T, PageViewUpsertArgs<ExtArgs>>): Prisma.Prisma__PageViewClient<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PageViewCountArgs>(args?: Prisma.Subset<T, PageViewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PageViewCountAggregateOutputType> : number>;
    aggregate<T extends PageViewAggregateArgs>(args: Prisma.Subset<T, PageViewAggregateArgs>): Prisma.PrismaPromise<GetPageViewAggregateType<T>>;
    groupBy<T extends PageViewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PageViewGroupByArgs['orderBy'];
    } : {
        orderBy?: PageViewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PageViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PageViewFieldRefs;
}
export interface Prisma__PageViewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.PageView$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PageView$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PageViewFieldRefs {
    readonly id: Prisma.FieldRef<"PageView", 'String'>;
    readonly user_id: Prisma.FieldRef<"PageView", 'String'>;
    readonly session_id: Prisma.FieldRef<"PageView", 'String'>;
    readonly page_path: Prisma.FieldRef<"PageView", 'String'>;
    readonly duration_seconds: Prisma.FieldRef<"PageView", 'Int'>;
    readonly created_at: Prisma.FieldRef<"PageView", 'DateTime'>;
}
export type PageViewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    where: Prisma.PageViewWhereUniqueInput;
};
export type PageViewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    where: Prisma.PageViewWhereUniqueInput;
};
export type PageViewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    where?: Prisma.PageViewWhereInput;
    orderBy?: Prisma.PageViewOrderByWithRelationInput | Prisma.PageViewOrderByWithRelationInput[];
    cursor?: Prisma.PageViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageViewScalarFieldEnum | Prisma.PageViewScalarFieldEnum[];
};
export type PageViewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    where?: Prisma.PageViewWhereInput;
    orderBy?: Prisma.PageViewOrderByWithRelationInput | Prisma.PageViewOrderByWithRelationInput[];
    cursor?: Prisma.PageViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageViewScalarFieldEnum | Prisma.PageViewScalarFieldEnum[];
};
export type PageViewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    where?: Prisma.PageViewWhereInput;
    orderBy?: Prisma.PageViewOrderByWithRelationInput | Prisma.PageViewOrderByWithRelationInput[];
    cursor?: Prisma.PageViewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageViewScalarFieldEnum | Prisma.PageViewScalarFieldEnum[];
};
export type PageViewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageViewCreateInput, Prisma.PageViewUncheckedCreateInput>;
};
export type PageViewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PageViewCreateManyInput | Prisma.PageViewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PageViewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    data: Prisma.PageViewCreateManyInput | Prisma.PageViewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PageViewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PageViewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageViewUpdateInput, Prisma.PageViewUncheckedUpdateInput>;
    where: Prisma.PageViewWhereUniqueInput;
};
export type PageViewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PageViewUpdateManyMutationInput, Prisma.PageViewUncheckedUpdateManyInput>;
    where?: Prisma.PageViewWhereInput;
    limit?: number;
};
export type PageViewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageViewUpdateManyMutationInput, Prisma.PageViewUncheckedUpdateManyInput>;
    where?: Prisma.PageViewWhereInput;
    limit?: number;
    include?: Prisma.PageViewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PageViewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    where: Prisma.PageViewWhereUniqueInput;
    create: Prisma.XOR<Prisma.PageViewCreateInput, Prisma.PageViewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PageViewUpdateInput, Prisma.PageViewUncheckedUpdateInput>;
};
export type PageViewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
    where: Prisma.PageViewWhereUniqueInput;
};
export type PageViewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageViewWhereInput;
    limit?: number;
};
export type PageView$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type PageViewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageViewSelect<ExtArgs> | null;
    omit?: Prisma.PageViewOmit<ExtArgs> | null;
    include?: Prisma.PageViewInclude<ExtArgs> | null;
};

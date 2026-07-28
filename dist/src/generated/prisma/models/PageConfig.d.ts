import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PageConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$PageConfigPayload>;
export type AggregatePageConfig = {
    _count: PageConfigCountAggregateOutputType | null;
    _avg: PageConfigAvgAggregateOutputType | null;
    _sum: PageConfigSumAggregateOutputType | null;
    _min: PageConfigMinAggregateOutputType | null;
    _max: PageConfigMaxAggregateOutputType | null;
};
export type PageConfigAvgAggregateOutputType = {
    id: number | null;
};
export type PageConfigSumAggregateOutputType = {
    id: number | null;
};
export type PageConfigMinAggregateOutputType = {
    id: number | null;
    themeColors: string | null;
    sectionOrder: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PageConfigMaxAggregateOutputType = {
    id: number | null;
    themeColors: string | null;
    sectionOrder: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PageConfigCountAggregateOutputType = {
    id: number;
    themeColors: number;
    sectionOrder: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PageConfigAvgAggregateInputType = {
    id?: true;
};
export type PageConfigSumAggregateInputType = {
    id?: true;
};
export type PageConfigMinAggregateInputType = {
    id?: true;
    themeColors?: true;
    sectionOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PageConfigMaxAggregateInputType = {
    id?: true;
    themeColors?: true;
    sectionOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PageConfigCountAggregateInputType = {
    id?: true;
    themeColors?: true;
    sectionOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PageConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageConfigWhereInput;
    orderBy?: Prisma.PageConfigOrderByWithRelationInput | Prisma.PageConfigOrderByWithRelationInput[];
    cursor?: Prisma.PageConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PageConfigCountAggregateInputType;
    _avg?: PageConfigAvgAggregateInputType;
    _sum?: PageConfigSumAggregateInputType;
    _min?: PageConfigMinAggregateInputType;
    _max?: PageConfigMaxAggregateInputType;
};
export type GetPageConfigAggregateType<T extends PageConfigAggregateArgs> = {
    [P in keyof T & keyof AggregatePageConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePageConfig[P]> : Prisma.GetScalarType<T[P], AggregatePageConfig[P]>;
};
export type PageConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageConfigWhereInput;
    orderBy?: Prisma.PageConfigOrderByWithAggregationInput | Prisma.PageConfigOrderByWithAggregationInput[];
    by: Prisma.PageConfigScalarFieldEnum[] | Prisma.PageConfigScalarFieldEnum;
    having?: Prisma.PageConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PageConfigCountAggregateInputType | true;
    _avg?: PageConfigAvgAggregateInputType;
    _sum?: PageConfigSumAggregateInputType;
    _min?: PageConfigMinAggregateInputType;
    _max?: PageConfigMaxAggregateInputType;
};
export type PageConfigGroupByOutputType = {
    id: number;
    themeColors: string | null;
    sectionOrder: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PageConfigCountAggregateOutputType | null;
    _avg: PageConfigAvgAggregateOutputType | null;
    _sum: PageConfigSumAggregateOutputType | null;
    _min: PageConfigMinAggregateOutputType | null;
    _max: PageConfigMaxAggregateOutputType | null;
};
export type GetPageConfigGroupByPayload<T extends PageConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PageConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PageConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PageConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PageConfigGroupByOutputType[P]>;
}>>;
export type PageConfigWhereInput = {
    AND?: Prisma.PageConfigWhereInput | Prisma.PageConfigWhereInput[];
    OR?: Prisma.PageConfigWhereInput[];
    NOT?: Prisma.PageConfigWhereInput | Prisma.PageConfigWhereInput[];
    id?: Prisma.IntFilter<"PageConfig"> | number;
    themeColors?: Prisma.StringNullableFilter<"PageConfig"> | string | null;
    sectionOrder?: Prisma.StringNullableFilter<"PageConfig"> | string | null;
    isActive?: Prisma.BoolFilter<"PageConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PageConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PageConfig"> | Date | string;
};
export type PageConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    themeColors?: Prisma.SortOrderInput | Prisma.SortOrder;
    sectionOrder?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PageConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PageConfigWhereInput | Prisma.PageConfigWhereInput[];
    OR?: Prisma.PageConfigWhereInput[];
    NOT?: Prisma.PageConfigWhereInput | Prisma.PageConfigWhereInput[];
    themeColors?: Prisma.StringNullableFilter<"PageConfig"> | string | null;
    sectionOrder?: Prisma.StringNullableFilter<"PageConfig"> | string | null;
    isActive?: Prisma.BoolFilter<"PageConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PageConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PageConfig"> | Date | string;
}, "id">;
export type PageConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    themeColors?: Prisma.SortOrderInput | Prisma.SortOrder;
    sectionOrder?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PageConfigCountOrderByAggregateInput;
    _avg?: Prisma.PageConfigAvgOrderByAggregateInput;
    _max?: Prisma.PageConfigMaxOrderByAggregateInput;
    _min?: Prisma.PageConfigMinOrderByAggregateInput;
    _sum?: Prisma.PageConfigSumOrderByAggregateInput;
};
export type PageConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.PageConfigScalarWhereWithAggregatesInput | Prisma.PageConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.PageConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PageConfigScalarWhereWithAggregatesInput | Prisma.PageConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PageConfig"> | number;
    themeColors?: Prisma.StringNullableWithAggregatesFilter<"PageConfig"> | string | null;
    sectionOrder?: Prisma.StringNullableWithAggregatesFilter<"PageConfig"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"PageConfig"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PageConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PageConfig"> | Date | string;
};
export type PageConfigCreateInput = {
    themeColors?: string | null;
    sectionOrder?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PageConfigUncheckedCreateInput = {
    id?: number;
    themeColors?: string | null;
    sectionOrder?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PageConfigUpdateInput = {
    themeColors?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sectionOrder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageConfigUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    themeColors?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sectionOrder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageConfigCreateManyInput = {
    id?: number;
    themeColors?: string | null;
    sectionOrder?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PageConfigUpdateManyMutationInput = {
    themeColors?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sectionOrder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageConfigUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    themeColors?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sectionOrder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PageConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    themeColors?: Prisma.SortOrder;
    sectionOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PageConfigAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PageConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    themeColors?: Prisma.SortOrder;
    sectionOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PageConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    themeColors?: Prisma.SortOrder;
    sectionOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PageConfigSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type PageConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    themeColors?: boolean;
    sectionOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pageConfig"]>;
export type PageConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    themeColors?: boolean;
    sectionOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pageConfig"]>;
export type PageConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    themeColors?: boolean;
    sectionOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["pageConfig"]>;
export type PageConfigSelectScalar = {
    id?: boolean;
    themeColors?: boolean;
    sectionOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PageConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "themeColors" | "sectionOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["pageConfig"]>;
export type $PageConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PageConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        themeColors: string | null;
        sectionOrder: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pageConfig"]>;
    composites: {};
};
export type PageConfigGetPayload<S extends boolean | null | undefined | PageConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PageConfigPayload, S>;
export type PageConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PageConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PageConfigCountAggregateInputType | true;
};
export interface PageConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PageConfig'];
        meta: {
            name: 'PageConfig';
        };
    };
    findUnique<T extends PageConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, PageConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PageConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PageConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PageConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, PageConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PageConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PageConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PageConfigFindManyArgs>(args?: Prisma.SelectSubset<T, PageConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PageConfigCreateArgs>(args: Prisma.SelectSubset<T, PageConfigCreateArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PageConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, PageConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PageConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PageConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PageConfigDeleteArgs>(args: Prisma.SelectSubset<T, PageConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PageConfigUpdateArgs>(args: Prisma.SelectSubset<T, PageConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PageConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, PageConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PageConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, PageConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PageConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PageConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PageConfigUpsertArgs>(args: Prisma.SelectSubset<T, PageConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__PageConfigClient<runtime.Types.Result.GetResult<Prisma.$PageConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PageConfigCountArgs>(args?: Prisma.Subset<T, PageConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PageConfigCountAggregateOutputType> : number>;
    aggregate<T extends PageConfigAggregateArgs>(args: Prisma.Subset<T, PageConfigAggregateArgs>): Prisma.PrismaPromise<GetPageConfigAggregateType<T>>;
    groupBy<T extends PageConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PageConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: PageConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PageConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PageConfigFieldRefs;
}
export interface Prisma__PageConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PageConfigFieldRefs {
    readonly id: Prisma.FieldRef<"PageConfig", 'Int'>;
    readonly themeColors: Prisma.FieldRef<"PageConfig", 'String'>;
    readonly sectionOrder: Prisma.FieldRef<"PageConfig", 'String'>;
    readonly isActive: Prisma.FieldRef<"PageConfig", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"PageConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PageConfig", 'DateTime'>;
}
export type PageConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    where: Prisma.PageConfigWhereUniqueInput;
};
export type PageConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    where: Prisma.PageConfigWhereUniqueInput;
};
export type PageConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    where?: Prisma.PageConfigWhereInput;
    orderBy?: Prisma.PageConfigOrderByWithRelationInput | Prisma.PageConfigOrderByWithRelationInput[];
    cursor?: Prisma.PageConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageConfigScalarFieldEnum | Prisma.PageConfigScalarFieldEnum[];
};
export type PageConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    where?: Prisma.PageConfigWhereInput;
    orderBy?: Prisma.PageConfigOrderByWithRelationInput | Prisma.PageConfigOrderByWithRelationInput[];
    cursor?: Prisma.PageConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageConfigScalarFieldEnum | Prisma.PageConfigScalarFieldEnum[];
};
export type PageConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    where?: Prisma.PageConfigWhereInput;
    orderBy?: Prisma.PageConfigOrderByWithRelationInput | Prisma.PageConfigOrderByWithRelationInput[];
    cursor?: Prisma.PageConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PageConfigScalarFieldEnum | Prisma.PageConfigScalarFieldEnum[];
};
export type PageConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageConfigCreateInput, Prisma.PageConfigUncheckedCreateInput>;
};
export type PageConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PageConfigCreateManyInput | Prisma.PageConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PageConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    data: Prisma.PageConfigCreateManyInput | Prisma.PageConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PageConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageConfigUpdateInput, Prisma.PageConfigUncheckedUpdateInput>;
    where: Prisma.PageConfigWhereUniqueInput;
};
export type PageConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PageConfigUpdateManyMutationInput, Prisma.PageConfigUncheckedUpdateManyInput>;
    where?: Prisma.PageConfigWhereInput;
    limit?: number;
};
export type PageConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PageConfigUpdateManyMutationInput, Prisma.PageConfigUncheckedUpdateManyInput>;
    where?: Prisma.PageConfigWhereInput;
    limit?: number;
};
export type PageConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    where: Prisma.PageConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PageConfigCreateInput, Prisma.PageConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PageConfigUpdateInput, Prisma.PageConfigUncheckedUpdateInput>;
};
export type PageConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
    where: Prisma.PageConfigWhereUniqueInput;
};
export type PageConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageConfigWhereInput;
    limit?: number;
};
export type PageConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PageConfigSelect<ExtArgs> | null;
    omit?: Prisma.PageConfigOmit<ExtArgs> | null;
};

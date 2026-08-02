import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    first_name: string | null;
    last_name: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    first_name: string | null;
    last_name: string | null;
    role: $Enums.Role | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password_hash: number;
    first_name: number;
    last_name: number;
    role: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password_hash: string;
    first_name: string | null;
    last_name: string | null;
    role: $Enums.Role;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password_hash?: Prisma.StringFilter<"User"> | string;
    first_name?: Prisma.StringNullableFilter<"User"> | string | null;
    last_name?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    saved_designs?: Prisma.SavedDesignListRelationFilter;
    page_views?: Prisma.PageViewListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    saved_designs?: Prisma.SavedDesignOrderByRelationAggregateInput;
    page_views?: Prisma.PageViewOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password_hash?: Prisma.StringFilter<"User"> | string;
    first_name?: Prisma.StringNullableFilter<"User"> | string | null;
    last_name?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    saved_designs?: Prisma.SavedDesignListRelationFilter;
    page_views?: Prisma.PageViewListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    first_name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    last_name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name?: string | null;
    last_name?: string | null;
    role?: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    saved_designs?: Prisma.SavedDesignCreateNestedManyWithoutUserInput;
    page_views?: Prisma.PageViewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name?: string | null;
    last_name?: string | null;
    role?: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    saved_designs?: Prisma.SavedDesignUncheckedCreateNestedManyWithoutUserInput;
    page_views?: Prisma.PageViewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saved_designs?: Prisma.SavedDesignUpdateManyWithoutUserNestedInput;
    page_views?: Prisma.PageViewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saved_designs?: Prisma.SavedDesignUncheckedUpdateManyWithoutUserNestedInput;
    page_views?: Prisma.PageViewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name?: string | null;
    last_name?: string | null;
    role?: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type UserCreateNestedOneWithoutSaved_designsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSaved_designsInput, Prisma.UserUncheckedCreateWithoutSaved_designsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSaved_designsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSaved_designsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSaved_designsInput, Prisma.UserUncheckedCreateWithoutSaved_designsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSaved_designsInput;
    upsert?: Prisma.UserUpsertWithoutSaved_designsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSaved_designsInput, Prisma.UserUpdateWithoutSaved_designsInput>, Prisma.UserUncheckedUpdateWithoutSaved_designsInput>;
};
export type UserCreateNestedOneWithoutPage_viewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPage_viewsInput, Prisma.UserUncheckedCreateWithoutPage_viewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPage_viewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutPage_viewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPage_viewsInput, Prisma.UserUncheckedCreateWithoutPage_viewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPage_viewsInput;
    upsert?: Prisma.UserUpsertWithoutPage_viewsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPage_viewsInput, Prisma.UserUpdateWithoutPage_viewsInput>, Prisma.UserUncheckedUpdateWithoutPage_viewsInput>;
};
export type UserCreateWithoutSaved_designsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name?: string | null;
    last_name?: string | null;
    role?: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    page_views?: Prisma.PageViewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSaved_designsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name?: string | null;
    last_name?: string | null;
    role?: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    page_views?: Prisma.PageViewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSaved_designsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSaved_designsInput, Prisma.UserUncheckedCreateWithoutSaved_designsInput>;
};
export type UserUpsertWithoutSaved_designsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSaved_designsInput, Prisma.UserUncheckedUpdateWithoutSaved_designsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSaved_designsInput, Prisma.UserUncheckedCreateWithoutSaved_designsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSaved_designsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSaved_designsInput, Prisma.UserUncheckedUpdateWithoutSaved_designsInput>;
};
export type UserUpdateWithoutSaved_designsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    page_views?: Prisma.PageViewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSaved_designsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    page_views?: Prisma.PageViewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutPage_viewsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name?: string | null;
    last_name?: string | null;
    role?: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    saved_designs?: Prisma.SavedDesignCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutPage_viewsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name?: string | null;
    last_name?: string | null;
    role?: $Enums.Role;
    created_at?: Date | string;
    updated_at?: Date | string;
    saved_designs?: Prisma.SavedDesignUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutPage_viewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPage_viewsInput, Prisma.UserUncheckedCreateWithoutPage_viewsInput>;
};
export type UserUpsertWithoutPage_viewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPage_viewsInput, Prisma.UserUncheckedUpdateWithoutPage_viewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPage_viewsInput, Prisma.UserUncheckedCreateWithoutPage_viewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPage_viewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPage_viewsInput, Prisma.UserUncheckedUpdateWithoutPage_viewsInput>;
};
export type UserUpdateWithoutPage_viewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saved_designs?: Prisma.SavedDesignUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutPage_viewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saved_designs?: Prisma.SavedDesignUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    saved_designs: number;
    page_views: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    saved_designs?: boolean | UserCountOutputTypeCountSaved_designsArgs;
    page_views?: boolean | UserCountOutputTypeCountPage_viewsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountSaved_designsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SavedDesignWhereInput;
};
export type UserCountOutputTypeCountPage_viewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PageViewWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    saved_designs?: boolean | Prisma.User$saved_designsArgs<ExtArgs>;
    page_views?: boolean | Prisma.User$page_viewsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password_hash" | "first_name" | "last_name" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    saved_designs?: boolean | Prisma.User$saved_designsArgs<ExtArgs>;
    page_views?: boolean | Prisma.User$page_viewsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        saved_designs: Prisma.$SavedDesignPayload<ExtArgs>[];
        page_views: Prisma.$PageViewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password_hash: string;
        first_name: string | null;
        last_name: string | null;
        role: $Enums.Role;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    saved_designs<T extends Prisma.User$saved_designsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$saved_designsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SavedDesignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    page_views<T extends Prisma.User$page_viewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$page_viewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password_hash: Prisma.FieldRef<"User", 'String'>;
    readonly first_name: Prisma.FieldRef<"User", 'String'>;
    readonly last_name: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$saved_designsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$page_viewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};

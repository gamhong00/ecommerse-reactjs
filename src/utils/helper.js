import { addProductToCart } from '@/apis/cartService';

export const handleAddProductToCartCommon = (
    userId,
    setIsOpen,
    setType,
    toast,
    sizeChoose,
    productId,
    quantity,
    setIsLoading,
    handleGetListProductsCart
) => {
    if (!userId) {
        setIsOpen(true);
        setType('login');
        toast.warning('Please login to add product to card');

        return;
    }

    if (!sizeChoose) {
        toast.warning('Please choose size');
        return;
    }

    const data = {
        userId,
        productId,
        quantity,
        size: sizeChoose
        // isMultiple: false
    };

    setIsLoading(true);
    addProductToCart(data)
        .then((res) => {
            setIsOpen(true);
            setType('cart');
            toast.success('Add product to cart successfully');
            setIsLoading(false);
            handleGetListProductsCart(userId, 'cart');
        })
        .catch((err) => {
            toast.error('Add product to cart failed');
            setIsLoading(false);
        });
};

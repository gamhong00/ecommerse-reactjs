import Button from '@/components/Button/Button';
import FormItem from '@pages/DetailProduct/components/FormItem';
import styles from '../styles.module.scss';

function ReviewProduct() {
    const {
        containerReview,
        review,
        noReview,
        replyForm,
        commentReplyTitle,
        commentNotes,
        commentFormCookiesConsent,
        btnSubmit
    } = styles;

    return (
        <div className={containerReview}>
            <div className={review}>REVIEWS</div>

            <p className={noReview}>There are no reviews yet.</p>

            <div className={replyForm}>
                <div className={commentReplyTitle}>
                    Be the first to review “Erat mattis gravida”
                </div>

                <p className={commentNotes}>
                    Your email address will not be published. Required fields
                    are marked
                </p>

                <form action=''>
                    {/* RATING */}
                    <FormItem
                        label={'Your rating'}
                        isRequired
                        typeChildren={'rating'}
                    />

                    {/* AREA */}
                    <FormItem
                        label={'Your review'}
                        isRequired
                        typeChildren={'textarea'}
                    />

                    {/* NAME */}
                    <FormItem
                        label={'Name'}
                        isRequired
                        typeChildren={'input'}
                    />

                    {/* EMAIL */}
                    <FormItem
                        label={'Email'}
                        isRequired
                        typeChildren={'input'}
                    />

                    <div className={commentFormCookiesConsent}>
                        <input type='checkbox' />
                        <span>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </span>
                    </div>

                    <div className={btnSubmit}>
                        <Button content={'SUBMIT'} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewProduct;

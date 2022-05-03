import clsx from "clsx"
import { memo, useState } from "react"
import { NavLink } from "react-router-dom"

export const RitmStypePage = () => {
    const [selectedReview, setSelectedReview] = useState<number | null>(2)

    const handleSelectReview = (id: number) => {
        if (id === selectedReview) return setSelectedReview(null)

        return setSelectedReview(id)
    }
    return (
        <main className="grow bg-[#162831] px-[100px] xl:px-[200px]  2xl:px-[312px]">
            <header className="flex items-center justify-between  py-[30px] font-sans text-white">
                <NavLink to="/ritm-style">
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M27.1809 59.9409C27.1622 59.9106 26.8094 59.8779 26.3971 59.8683C25.9847 59.8584 25.2547 59.785 24.7749 59.7051C20.5702 59.0045 16.3204 57.4796 13.4889 55.6556C12.9657 55.3185 12.8461 55.1884 12.9321 55.0493C12.9947 54.9482 13.2026 54.9996 14.4143 55.4155C14.9941 55.6145 15.8939 55.8695 16.4137 55.9822C17.2932 56.1727 17.4726 56.1869 18.9948 56.187C21.2785 56.187 22.0607 56.0577 24.5484 55.269C29.2868 53.7666 30.4723 53.76 35.1793 55.2091C37.8827 56.0415 38.946 56.2254 41.0505 56.2247C42.5817 56.2243 44.0207 55.9545 45.7505 55.3432C46.2103 55.1808 46.6727 55.0317 46.7779 55.012C46.9836 54.9735 47.0835 55.0604 47.0209 55.2232C46.9254 55.472 44.5079 56.8218 43.0241 57.4548C40.1304 58.6891 35.643 59.8322 33.5718 59.8625C33.1513 59.8687 32.7889 59.9033 32.7665 59.9397C32.717 60.0193 27.2301 60.0205 27.1809 59.9409ZM16.3409 54.0733C12.5739 53.5173 9.30804 51.8135 6.5237 48.9516C5.00699 47.3927 3.88666 45.7769 2.75711 43.5188C1.27915 40.5645 0.226076 36.7539 0.0455478 33.7061C-0.0161067 32.666 -0.014798 26.8854 0.04722 25.897C0.173655 23.8829 0.910019 20.9255 1.92325 18.3621C2.312 17.3785 3.34297 15.2343 3.83642 14.3832C3.98692 14.1235 4.14775 13.8457 4.19385 13.7658C5.18751 12.0402 7.09669 9.62045 8.78347 7.94873C10.3124 6.43349 11.7774 5.24993 13.5417 4.1048C14.0815 3.75444 14.605 3.41201 14.705 3.3438C15.0745 3.09173 17.3128 1.95851 18.1307 1.60932C19.9436 0.835313 22.0153 0.156835 22.6325 0.135042C22.8342 0.12785 23.0161 0.0945802 23.0369 0.0610195C23.0576 0.0274588 23.2457 0 23.4548 0C23.7763 0 23.8365 0.0212842 23.8453 0.138238C23.8538 0.251124 23.7395 0.312434 23.2246 0.471666C21.068 1.1383 18.592 2.31692 16.2042 3.81372C14.4102 4.93822 12.3072 6.69711 10.5681 8.52755C6.11284 13.217 3.52037 18.857 2.73151 25.5772C2.57774 26.8873 2.55746 30.3642 2.69654 31.5993C3.54967 39.1805 6.82746 45.1894 11.6878 48.0823C13.5021 49.1622 15.4951 49.7334 17.7223 49.8119C19.5274 49.8753 20.6818 49.6384 23.9467 48.5345C27.0168 47.4966 27.8481 47.2771 29.1928 47.1498C30.0903 47.0648 31.1528 47.1418 32.1942 47.3672C32.8148 47.5016 35.4005 48.3078 36.8075 48.8057C38.9725 49.5719 40.5767 49.8698 42.2241 49.8119C44.9235 49.7169 47.286 48.8951 49.4339 47.304C53.6459 44.1837 56.49 38.4675 57.2477 31.5995C57.3711 30.4813 57.3722 27.0844 57.2495 25.9334C56.7085 20.8555 55.2103 16.5486 52.6128 12.6036C50.0636 8.73196 46.4511 5.32707 42.4422 3.01741C40.7999 2.07132 38.3112 0.964181 36.7166 0.470577C36.2121 0.314396 36.0805 0.245386 36.0805 0.136858C36.0805 0.0214295 36.1364 0.000145285 36.4396 0.000145285C36.6372 0.000145285 36.8155 0.0271682 36.836 0.0602204C36.8564 0.0932 37.0589 0.127778 37.2859 0.136931C38.3045 0.178119 41.5517 1.38529 43.763 2.54488C50.8293 6.25043 55.9943 12.3048 58.5982 19.9349C59.2764 21.9221 59.8357 24.4856 59.8595 25.7154C59.8669 26.0964 59.9096 26.4525 59.9549 26.5103C60.0191 26.5922 60.0156 26.6022 59.9388 26.556C59.8592 26.5082 59.8563 26.5263 59.9234 26.6514C60.0243 26.8397 59.9855 32.1766 59.8703 33.9603C59.784 35.2981 59.5495 36.635 59.0933 38.3914C57.5673 44.2664 54.404 48.9458 50.1126 51.6766C48.5839 52.6494 46.3338 53.5596 44.581 53.9143C43.8475 54.0627 43.5433 54.0822 41.9696 54.0822C39.5962 54.0822 38.4446 53.8865 35.2079 52.9326C31.8053 51.9298 31.3616 51.837 29.9731 51.837C28.5844 51.837 28.1397 51.9301 24.7383 52.9327C21.6163 53.8529 20.5238 54.0466 18.2675 54.0802C17.3278 54.0941 16.4608 54.0911 16.3409 54.0733ZM16.5954 47.3661C15.1403 47.2073 13.9619 46.8565 12.5602 46.1651C10.6644 45.2298 9.06746 43.7643 7.69143 41.6967C7.04071 40.7189 6.4691 39.6746 6.51687 39.5504C6.59539 39.3459 6.8716 39.4466 7.28733 39.8311C8.196 40.6715 10.2789 42.2052 10.5118 42.2052C10.5525 42.2052 10.6374 42.2517 10.7005 42.3082C10.8557 42.4474 12.0699 42.9759 12.742 43.1967C14.0902 43.6397 15.8305 43.8436 17.2861 43.729C18.9945 43.5947 20.2113 43.3071 22.121 42.5865C25.1308 41.4509 26.7375 41.0548 28.9783 40.8961C30.6464 40.7779 32.603 40.9664 34.3719 41.4159C35.227 41.6332 36.1761 41.944 37.6074 42.4754C39.1577 43.0512 40.0205 43.3104 41.0322 43.5046C44.4239 44.1555 47.5417 43.5563 50.3309 41.7174C51.176 41.1602 52.3921 40.2012 52.8358 39.7422C53.1323 39.4354 53.4259 39.3517 53.503 39.5522C53.5778 39.7469 52.4918 41.5776 51.649 42.6773C51.1851 43.2828 50.1748 44.3224 49.5674 44.8193C48.0995 46.0202 46.212 46.8889 44.2599 47.2618C43.3573 47.4343 41.1923 47.4359 40.1884 47.2648C39.0751 47.0752 37.9092 46.7437 36.5895 46.2419C33.6604 45.1281 32.1823 44.8049 30.0096 44.8028C29.075 44.802 28.5555 44.8394 27.8793 44.9559C26.2664 45.2341 25.629 45.4238 22.8706 46.4478C21.8655 46.8209 20.8728 47.0866 19.8661 47.2518C19.0321 47.3889 17.3435 47.4479 16.5954 47.3661Z"
                            fill="white"
                        />
                        <path
                            d="M24.9209 35.5078L17.4323 17.6227C16.9007 16.3915 16.3691 15.5382 15.8375 15.063C15.3059 14.5878 14.6934 14.307 14 14.2206V13.5726C14.0925 13.5726 14.3236 13.5618 14.6934 13.5402C15.0401 13.5186 15.2943 13.5078 15.4561 13.5078C16.2651 13.5078 17.0971 13.5942 17.9523 13.767C18.8075 13.9182 19.6165 14.2854 20.3792 14.8686C21.1419 15.4518 21.7891 16.3699 22.3207 17.6227L27.0011 28.8009L30.1213 20.5063L28.9079 17.6227C28.3763 16.3915 27.7985 15.5382 27.1744 15.063C26.5735 14.5878 25.9263 14.307 25.2329 14.2206V13.5726C25.3254 13.5726 25.5334 13.5618 25.857 13.5402C26.1806 13.5186 26.4233 13.5078 26.585 13.5078C27.394 13.5078 28.2261 13.5942 29.0813 13.767C29.9364 13.9398 30.7454 14.3178 31.5081 14.901C32.2709 15.4626 32.918 16.3699 33.4496 17.6227L38.4074 29.4165L44.3359 13.8318H46L37.7833 35.5078H36.3965L31.0574 22.8068L26.3077 35.5078H24.9209Z"
                            fill="white"
                        />
                    </svg>
                </NavLink>

                <nav className="text-sm font-normal leading-[19px]">
                    <ul className="flex items-center space-x-6 2xl:space-x-[50px]">
                        <li className="first-letter:uppercase">
                            <NavLink to="/ritm-style">
                                <a className="duration-150 hover:underline hover:underline-offset-2">
                                    главная
                                </a>
                            </NavLink>
                        </li>
                        <li className="first-letter:uppercase">
                            <NavLink to="/ritm-style">
                                <a className="duration-150 hover:underline hover:underline-offset-2">
                                    сеансы
                                </a>
                            </NavLink>
                        </li>
                        <li className="first-letter:uppercase">
                            <NavLink to="/ritm-style">
                                <a className="duration-150 hover:underline hover:underline-offset-2">
                                    отзывы
                                </a>
                            </NavLink>
                        </li>
                        <li className="first-letter:uppercase">
                            <NavLink to="/ritm-style">
                                <a className="duration-150 hover:underline hover:underline-offset-2">
                                    контакты
                                </a>
                            </NavLink>
                        </li>
                        <li className="first-letter:uppercase">
                            <NavLink to="/ritm-style">
                                <a className="duration-150 hover:underline hover:underline-offset-2">
                                    новости
                                </a>
                            </NavLink>
                        </li>
                        <li className="first-letter:uppercase">
                            <NavLink to="/ritm-style">
                                <a className="duration-150 hover:underline hover:underline-offset-2">
                                    обо мне
                                </a>
                            </NavLink>
                        </li>
                        <li className="first-letter:uppercase">
                            <NavLink to="/ritm-style">
                                <a className="duration-150 hover:underline hover:underline-offset-2">
                                    блог
                                </a>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="rounded-[3px] bg-[#018ABE] py-[9px] px-[15px] text-[13px] font-semibold leading-[18px] duration-150 first-letter:uppercase hover:bg-white hover:text-[#018ABE]">
                    записатся на сеанс
                </button>
            </header>
            <main className="flex flex-col pt-5">
                {/* hero */}
                <section className="flex flex-col items-center justify-center rounded-[10px] bg-ritm-hero bg-center bg-no-repeat pt-[136px] pb-[210px] text-center font-ElMessiri font-bold text-white">
                    <div className="mb-10 flex items-center">
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                fill="white"
                            />
                        </svg>
                        <h3 className="mx-[66px] text-2xl">
                            Укрепление здоровья
                        </h3>

                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z"
                                fill="white"
                            />
                        </svg>
                    </div>

                    <h2 className="text-[64px] leading-[90px]">
                        Акватерапия RitmStyle
                    </h2>
                </section>

                {/* seans */}
                <section className="flex flex-col items-center py-[75px] font-ElMessiri text-white">
                    <div className="flex items-center">
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                        <h3 className=" mx-[45px] text-[42px] font-bold leading-[60px]">
                            Сеансы RitmStyle
                        </h3>
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-6 text-2xl font-bold leading-[33,6] xl:grid-cols-3">
                        {__seances__.map((seance) => (
                            <SeanceCard seance={seance} key={seance.id} />
                        ))}
                    </div>
                </section>

                {/* reviews */}
                <section className="flex flex-col items-center py-[75px] font-ElMessiri text-white 2xl:-mx-[220px]">
                    <div className="mb-[100px] flex items-center">
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                        <h3 className=" mx-[45px] text-[42px] font-bold leading-[60px] first-letter:uppercase">
                            отзывы
                        </h3>
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                    </div>

                    <div className="mb-[60px] grid grid-cols-3 place-items-center gap-x-[50px] font-sans">
                        {__reviews__.map((review) => (
                            <ReviewCard
                                key={review.id}
                                review={review}
                                selected={review.id === selectedReview}
                                onClick={handleSelectReview}
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-center space-x-5">
                        <button className="h-4 w-4 rounded-[3px] border border-transparent bg-white duration-150 hover:border-white"></button>
                        <button className="h-4 w-4 rounded-[3px] border border-transparent bg-white/40 duration-150 hover:border-white"></button>
                        <button className="h-4 w-4 rounded-[3px] border border-transparent bg-white/40 duration-150 hover:border-white"></button>
                        <button className="h-4 w-4 rounded-[3px] border border-transparent bg-white/40 duration-150 hover:border-white"></button>
                    </div>
                </section>

                <section className="flex flex-col items-center space-y-[100px] px-[110px] py-[75px] font-ElMessiri text-white">
                    <div className=" flex items-center">
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                        <h3 className=" mx-[45px] text-[42px] font-bold leading-[60px] first-letter:uppercase">
                            об RitmStyle
                        </h3>
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                    </div>

                    <figure className="flex space-x-[84px]">
                        <img
                            src="/assets/ritmstyle/figure.jpg"
                            alt=""
                            height={526}
                            width={325}
                        />
                        <figcaption className="flex flex-col space-y-[30px]">
                            <h4 className="text-2xl font-bold">
                                RitmStyle массаж{" "}
                            </h4>
                            <p className="text-base font-light">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec in purus, sed tellus eget
                                mattis nibh quam. Eu ornare nunc, id est. Erat
                                consectetur etiam a sit diam in imperdiet amet.
                                Diam nisl, ipsum suscipit amet. Eleifend amet
                                habitasse proin quis adipiscing. Nisl convallis
                                mauris in consequat. Sit ac vitae posuere
                                maecenas dictumst quam. Felis amet diam, non
                                augue massa. Egestas molestie lobortis rhoncus,
                                elit nulla nisl. Habitant tortor at tempor.
                            </p>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-row-reverse space-x-[84px] space-x-reverse">
                        <img
                            src="/assets/ritmstyle/figure.jpg"
                            alt=""
                            height={526}
                            width={325}
                        />
                        <figcaption className="flex flex-col space-y-[30px]">
                            <h4 className="text-2xl font-bold">
                                RitmStyle массаж{" "}
                            </h4>
                            <p className="text-base font-light">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec in purus, sed tellus eget
                                mattis nibh quam. Eu ornare nunc, id est. Erat
                                consectetur etiam a sit diam in imperdiet amet.
                                Diam nisl, ipsum suscipit amet. Eleifend amet
                                habitasse proin quis adipiscing. Nisl convallis
                                mauris in consequat. Sit ac vitae posuere
                                maecenas dictumst quam. Felis amet diam, non
                                augue massa. Egestas molestie lobortis rhoncus,
                                elit nulla nisl. Habitant tortor at tempor.
                            </p>
                        </figcaption>
                    </figure>
                </section>

                <section className="flex flex-col items-center space-y-[100px] px-[110px] py-[75px] font-ElMessiri text-white">
                    <div className=" flex items-center">
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                        <h3 className=" mx-[45px] text-[42px] font-bold leading-[60px] first-letter:uppercase">
                            стоимость сеансов
                        </h3>
                        <svg
                            width="28"
                            height="14"
                            viewBox="0 0 28 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z"
                                fill="#018ABE"
                            />
                        </svg>
                    </div>

                    <article className="flex w-full justify-between space-x-[134px]">
                        <ul className="flex w-full flex-col items-start justify-center space-y-[30px] text-lg font-normal leading-[25px] 2xl:max-w-[416px]">
                            <li className="flex w-full items-center justify-between">
                                <svg
                                    width="18"
                                    height="9"
                                    viewBox="0 0 28 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                        fill="#018ABE"
                                    />
                                </svg>
                                <span className="grow px-5 first-letter:uppercase">
                                    RitmStyle с погружением
                                </span>
                                <span className="font-bold after:content-['р.']">
                                    1000
                                </span>
                            </li>
                            <li className="flex w-full items-center justify-between">
                                <svg
                                    width="18"
                                    height="9"
                                    viewBox="0 0 28 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                        fill="#018ABE"
                                    />
                                </svg>
                                <span className="grow px-5  first-letter:uppercase">
                                    абонемент на RitmStyle
                                </span>
                                <span className="font-bold after:content-['р.']">
                                    5500
                                </span>
                            </li>
                            <li className="flex w-full items-center justify-between">
                                <svg
                                    width="18"
                                    height="9"
                                    viewBox="0 0 28 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                        fill="#018ABE"
                                    />
                                </svg>
                                <span className="grow px-5  first-letter:uppercase">
                                    ritmStyle для пар
                                </span>
                                <span className="font-bold after:content-['р.']">
                                    6000
                                </span>
                            </li>
                            <li className="flex w-full items-center justify-between">
                                <svg
                                    width="18"
                                    height="9"
                                    viewBox="0 0 28 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                        fill="#018ABE"
                                    />
                                </svg>
                                <span className="grow px-5  first-letter:uppercase">
                                    ritmStyle для беременных
                                </span>
                                <span className="font-bold after:content-['р.']">
                                    13500
                                </span>
                            </li>

                            <li className="flex w-full items-center justify-between">
                                <svg
                                    width="18"
                                    height="9"
                                    viewBox="0 0 28 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z"
                                        fill="#018ABE"
                                    />
                                </svg>
                                <span className="grow px-5  first-letter:uppercase">
                                    ritmStyle + фотосессия
                                </span>
                                <span className="font-bold after:content-['р.']">
                                    11500
                                </span>
                            </li>
                        </ul>
                        <figure className="flex  max-w-[216px] flex-col space-y-[30px]  2xl:w-[526px]">
                            <img
                                src="/assets/ritmstyle/card.jpg"
                                alt=""
                                height={396}
                                width={526}
                                className="w-full"
                            />
                            <figcaption className="flex flex-col space-y-[30px] text-center">
                                <span className="text-2xl font-bold">
                                    RitmStyle массаж{" "}
                                </span>
                            </figcaption>
                        </figure>
                    </article>
                </section>
            </main>
            <aside className="grid grid-cols-2 items-stretch gap-12 rounded-[10px] px-[110px] pt-[150px] pb-[60px] 2xl:grid-cols-3">
                <img
                    src="/assets/ritmstyle/map.jpg"
                    alt="map"
                    height={604}
                    width={856}
                    className="col-span-2 row-span-2 rounded-[10px]"
                />
                {__contacts__.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </aside>
            <footer className="flex items-center justify-between py-[30px] px-[110px] text-base font-normal leading-[18px] text-white">
                <span>© 2018-2022 RitmStyle</span>
                <span className="font-bold">Сделано d-e-n.info</span>
            </footer>
        </main>
    )
}

type TContact = {
    id: number
    title: string
    address: string
    metro?: string
    subcribeType: string
}

const __contacts__: TContact[] = [
    {
        id: 1,
        title: "бассейн WorkClass",
        address: "Невский 140",
        metro: "    м. Спасская",
        subcribeType: "Запись по договоренности",
    },
    {
        id: 2,
        title: "бассейн 'На Гороховой'",
        address: "3-й проезд Иванова",
        metro: "м. Крестовский остров",
        subcribeType: "Запись по договоренности",
    },
]

interface ContactCardProps {
    contact: TContact
}
const ContactCard = memo(({ contact }: ContactCardProps) => {
    return (
        <div className="flex flex-col space-y-[21px] rounded-[10px] bg-[#018ABE] py-[35px] px-[45px] text-white">
            <h4 className="font-ElMessiri text-lg font-bold leading-[36px] first-letter:uppercase 2xl:text-2xl">
                {contact.title}
            </h4>
            <ul className="mt-[21px] mb-[30px] flex flex-col space-y-[21px] text-sm font-normal leading-[18px]">
                <li className="ml-5 ">{contact.address}</li>
                <li className="ml-5 ">{contact.metro}</li>
                <li className="ml-5 ">{contact.subcribeType}</li>
            </ul>
            <button className="self-start rounded-[3px] bg-white px-[15px] py-[9px] text-[13px] font-semibold leading-[18px] text-[#018ABE] duration-150 first-letter:uppercase hover:scale-110">
                записаться на сеанс
            </button>
        </div>
    )
})

ContactCard.displayName = "ContactCard"

type TSeance = {
    id: number
    text: string
    image: string
    double?: boolean
}

const __seances__: TSeance[] = [
    {
        id: 1,
        text: "Стандартный RitmStyle",
        image: "seans-2xl.png",
        double: true,
    },
    { id: 2, text: "RitmStyle для пар", image: "figure.jpg" },
    {
        id: 3,
        text: "RitmStyle с полным погружением под воду",
        image: "figure.jpg",
    },
    { id: 4, text: "RitmStyle для беременных", image: "figure.jpg" },
    {
        id: 5,
        text: "RitmStyle + красочная подводная фотосессия",
        image: "figure.jpg",
    },
]

interface SeanceCardProps {
    seance: TSeance
}

const SeanceCard = memo(({ seance }: SeanceCardProps) => {
    return (
        <div
            style={{
                background: seance.double
                    ? `url(/assets/ritmstyle/${seance.image})`
                    : `linear-gradient(0deg, rgba(1, 138, 190, 0.5), rgba(1, 138, 190, 0.5)), url(/assets/ritmstyle/${seance.image}), #8E8E8E`,
                backgroundSize: "cover",
            }}
            className="col-span-1 flex h-[258px] items-end rounded-[10px] px-10 pb-[30px] first:row-span-2 first:h-full"
        >
            <span>{seance.text}</span>
        </div>
    )
})
SeanceCard.displayName = "SeanceCard"

type TReview = {
    id: number
    name: string
    text: string
}

const __reviews__: TReview[] = [
    {
        id: 1,
        name: "Александра Дмитриева",
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent namornare fringilla enim nibh donec sit imperdiet.Amet, diam duis eu sit et. Volutpat vestibulum alectus sed blandit.Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis.",
    },
    {
        id: 2,
        name: "Кира Иванова",
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent namornare fringilla enim nibh donec sit imperdiet.Amet, diam duis eu sit et. Volutpat vestibulum alectus sed blandit.Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis.",
    },
    {
        id: 3,
        name: "Яна Жернова",
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent namornare fringilla enim nibh donec sit imperdiet.Amet, diam duis eu sit et. Volutpat vestibulum alectus sed blandit.Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis.",
    },
]

interface ReviewCardProps {
    review: TReview
    selected?: boolean
    onClick(id: number): void
}

const ReviewCard = memo(({ review, selected, onClick }: ReviewCardProps) => {
    return (
        <article
            onClick={() => onClick(review.id)}
            className={clsx(
                "cursor pointer rounded-[10px] bg-[#018ABE] px-4 pt-10 pb-[56px] opacity-40 duration-150 2xl:px-[45px] ",

                selected && " pt-[50px] opacity-100 2xl:px-[60px]"
            )}
        >
            <h2
                className={clsx(
                    "mb-[15px] text-base font-bold duration-150",
                    selected && "mb-5 text-xl"
                )}
            >
                {review.name}
            </h2>
            <p
                className={clsx(
                    "mb-3.5 max-h-[250px] overflow-hidden text-[10px] font-light duration-150 xl:max-h-fit",
                    selected && "text-sm"
                )}
            >
                {review.text}
            </p>
        </article>
    )
})

ReviewCard.displayName = "ReviewCard"

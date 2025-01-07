import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full flex flex-col justify-center items-center my-[10%]'>
      <div className="mx-auto flex flex-col items-center select-none pointer-events-none">
      <h1 className='text-black text-6xl font-bold'>404</h1>
      <h2 className='text-gray-200 text-xl'>{t("notFound")}</h2>
      </div>
    </div>
  )
}

export default NotFound
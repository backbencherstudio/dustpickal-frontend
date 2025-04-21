export default function Loading() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center h-screen">
            <div className="loader">
                <div className="loader_cube loader_cube--color"></div>
                <div className="loader_cube loader_cube--glowing"></div>
            </div>
            <h4 className="text-sm font-medium text-gray-500">Loading...</h4>
        </div>
    )
}

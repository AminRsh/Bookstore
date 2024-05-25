import OrderCard from "@/components/ui/OrderCard"
import H1 from "@/components/ui/h1"
import { getOrdersByUser } from "@/lib/actions/order.actions"
import { getUserById } from "@/lib/actions/user.actions"
import { auth } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"

export default async function page() {

    const { userId } = auth()
    const user = await currentUser()
    const userImage = user?.imageUrl
    const id = await getUserById(userId!)

    let orders = await getOrdersByUser(id!)
    if (!orders) {
        orders = [];
    }

    return (
        <div className="flex flex-col items-center lg:mx-[2%] xl:mx-[10%] my-[5%] space-y-16 p-8 border border-gray-300 bg-gray-100 rounded-xl">
            <H1>Welcome {user?.firstName}</H1>
            <h2 className="text-2xl font-bold">Your order list</h2>
            {
                orders.length === 0 &&
                <div className="felx flex-col items-center justify-center">
                    <H1 className="text-center">There is no order yet</H1>
                </div>
            }
            <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-2 lg:gap-16 mt-[70px] items-stretch">
            
                {
                    orders.map((order, index) => (
                        <OrderCard
                            key={index}
                            order={order}
                            userImage={userImage}
                        />
                    ))
                }
            </div>
        </div>
    )
}
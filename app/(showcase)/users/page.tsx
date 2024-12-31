import { db } from "@/libs/db"
import { usersTable } from "@/libs/db/schema"

export default async function UsersPage() {
  const users = await db.select().from(usersTable)

  return (
    <div className="flex flex-col gap-16 p-32">
      {users.map((user) => (
        <div
          className="shadow-sm flex flex-col gap-4 rounded-8 border border-mauve-a6 p-16 font-mono text-14 shadow-1"
          key={user.id}
        >
          <div>
            {user.id} {user.name}
          </div>
          <div>
            {user.createdAt.toLocaleDateString("en-US", {
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
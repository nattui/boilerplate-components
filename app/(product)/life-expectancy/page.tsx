import { dashboardLifeExpectancy } from "@/actions/dashboard-life-expectancy"
import { profileLifeExpectancy } from "@/actions/profile-life-expectancy"
import LifeExpectancyClientPage from "@/app/(product)/life-expectancy/page.client"
import { getIsAuthenticated } from "@/libs/session"
import { ROUTE } from "@/utils/constants"
import { redirect } from "next/navigation"

export default async function LifeExpectancyPage() {
  const isAuthenticated = await getIsAuthenticated()
  if (!isAuthenticated) redirect(ROUTE.SIGNIN)

  const profile = await profileLifeExpectancy()
  const dashboard = await dashboardLifeExpectancy(profile?.country ?? undefined)

  console.log(":::: profile:", profile)

  return <LifeExpectancyClientPage dashboard={dashboard} profile={profile} />
}

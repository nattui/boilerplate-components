import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  email: varchar("email", { length: 100 }).unique().notNull(),
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 32 }).notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
  username: varchar("username", { length: 32 }).unique().notNull(),
})

export const providerEnum = pgEnum("provider", ["credentials", "social"])

export const authProvidersTable = pgTable("auth_providers", {
  id: serial("id").primaryKey(),
  provider: providerEnum().notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
})

export const authCredentialsTable = pgTable("auth_credentials", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  hashPassword: text("hash_password").notNull(),
  id: serial("id").primaryKey(),
  providerId: integer("provider_id")
    .notNull()
    .references(() => authProvidersTable.id, { onDelete: "cascade" }),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
})

export const socialEnum = pgEnum("social", ["google", "facebook", "github"])

export const authSocialTable = pgTable("auth_social", {
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  id: serial("id").primaryKey(),
  providerId: integer("provider_id")
    .notNull()
    .references(() => authProvidersTable.id, { onDelete: "cascade" }),
  social: socialEnum().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
})

export type AuthCredentials = typeof authCredentialsTable.$inferSelect
export type AuthProviders = typeof authProvidersTable.$inferSelect
export type AuthSocial = typeof authSocialTable.$inferSelect
export type NewAuthCredentials = typeof authCredentialsTable.$inferInsert
export type NewAuthProviders = typeof authProvidersTable.$inferInsert
export type NewAuthSocial = typeof authSocialTable.$inferInsert
export type NewUser = typeof usersTable.$inferInsert
export type Users = typeof usersTable.$inferSelect

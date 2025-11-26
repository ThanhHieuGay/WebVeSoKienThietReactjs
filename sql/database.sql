-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.checking_history (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  ticket_number text NOT NULL,
  province_code text NOT NULL,
  draw_date date NOT NULL,
  is_winner boolean NOT NULL,
  prize_name text,
  ip_address text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT checking_history_pkey PRIMARY KEY (id),
  CONSTRAINT checking_history_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.lottery_results (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  province_id uuid,
  draw_date date NOT NULL,
  prize_special text,
  prize_first text,
  prize_second ARRAY,
  prize_third ARRAY,
  prize_fourth ARRAY,
  prize_fifth ARRAY,
  prize_sixth ARRAY,
  prize_seventh ARRAY,
  prize_eighth text,
  status text DEFAULT 'pending'::text CHECK (status = ANY (ARRAY['pending'::text, 'drawing'::text, 'completed'::text])),
  total_winners integer DEFAULT 0,
  total_prize_amount numeric DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT lottery_results_pkey PRIMARY KEY (id),
  CONSTRAINT lottery_results_province_id_fkey FOREIGN KEY (province_id) REFERENCES public.provinces(id)
);
CREATE TABLE public.news (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  summary text,
  image_url text,
  type text DEFAULT 'new'::text CHECK (type = ANY (ARRAY['hot'::text, 'new'::text, 'popular'::text])),
  category text DEFAULT 'general'::text CHECK (category = ANY (ARRAY['general'::text, 'result'::text, 'winner'::text, 'guide'::text])),
  author_id uuid,
  views integer DEFAULT 0,
  is_published boolean DEFAULT true,
  published_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT news_pkey PRIMARY KEY (id),
  CONSTRAINT news_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.users(id)
);
CREATE TABLE public.order_items (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  order_id uuid,
  ticket_id uuid,
  ticket_number text NOT NULL,
  province_name text NOT NULL,
  draw_date date NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  price numeric NOT NULL,
  subtotal numeric NOT NULL,
  is_winner boolean DEFAULT false,
  prize_name text,
  prize_amount numeric DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT order_items_pkey PRIMARY KEY (id),
  CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id),
  CONSTRAINT order_items_ticket_id_fkey FOREIGN KEY (ticket_id) REFERENCES public.tickets(id)
);
CREATE TABLE public.orders (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  order_code text NOT NULL UNIQUE,
  user_id uuid,
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_email text,
  customer_address text,
  subtotal numeric NOT NULL,
  discount numeric DEFAULT 0,
  total numeric NOT NULL,
  payment_method text NOT NULL CHECK (payment_method = ANY (ARRAY['momo'::text, 'zalopay'::text, 'banking'::text, 'card'::text])),
  payment_status text DEFAULT 'pending'::text CHECK (payment_status = ANY (ARRAY['pending'::text, 'paid'::text, 'failed'::text, 'refunded'::text])),
  status text DEFAULT 'pending'::text CHECK (status = ANY (ARRAY['pending'::text, 'processing'::text, 'completed'::text, 'cancelled'::text])),
  notes text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT orders_pkey PRIMARY KEY (id),
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.provinces (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  name text NOT NULL,
  region text NOT NULL CHECK (region = ANY (ARRAY['north'::text, 'central'::text, 'south'::text])),
  draw_days ARRAY,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT provinces_pkey PRIMARY KEY (id)
);
CREATE TABLE public.tickets (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  ticket_number text NOT NULL,
  province_id uuid,
  draw_date date NOT NULL,
  price numeric NOT NULL DEFAULT 10000,
  quantity_total integer NOT NULL DEFAULT 1,
  quantity_available integer NOT NULL DEFAULT 1,
  status text DEFAULT 'available'::text CHECK (status = ANY (ARRAY['available'::text, 'sold'::text, 'reserved'::text, 'expired'::text])),
  badge text CHECK (badge = ANY (ARRAY['hot'::text, 'new'::text, 'low'::text, NULL::text])),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT tickets_pkey PRIMARY KEY (id),
  CONSTRAINT tickets_province_id_fkey FOREIGN KEY (province_id) REFERENCES public.provinces(id)
);
CREATE TABLE public.transactions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  order_id uuid,
  type text NOT NULL CHECK (type = ANY (ARRAY['deposit'::text, 'withdraw'::text, 'purchase'::text, 'refund'::text, 'prize'::text])),
  amount numeric NOT NULL,
  balance_before numeric NOT NULL,
  balance_after numeric NOT NULL,
  description text,
  status text DEFAULT 'completed'::text CHECK (status = ANY (ARRAY['pending'::text, 'completed'::text, 'failed'::text])),
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT transactions_pkey PRIMARY KEY (id),
  CONSTRAINT transactions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id),
  CONSTRAINT transactions_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id)
);
CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  firebase_uid text NOT NULL UNIQUE,
  email text NOT NULL UNIQUE,
  display_name text,
  phone_number text,
  avatar_url text,
  role text DEFAULT 'user'::text CHECK (role = ANY (ARRAY['user'::text, 'agent'::text, 'admin'::text])),
  status text DEFAULT 'active'::text CHECK (status = ANY (ARRAY['active'::text, 'locked'::text, 'pending'::text])),
  balance numeric DEFAULT 0,
  total_spent numeric DEFAULT 0,
  total_won numeric DEFAULT 0,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id)
);
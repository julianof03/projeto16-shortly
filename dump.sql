--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA heroku_ext;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: url; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.url (
    id integer NOT NULL,
    "shortUrl" character varying NOT NULL,
    url character varying NOT NULL,
    "visitCount" integer NOT NULL,
    userid integer NOT NULL
);


--
-- Name: URL_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."URL_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: URL_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."URL_id_seq" OWNED BY public.url.id;


--
-- Name: session; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.session (
    sessionid integer NOT NULL,
    email text NOT NULL,
    token text
);


--
-- Name: session_sessionid_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.session_sessionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: session_sessionid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.session_sessionid_seq OWNED BY public.session.sessionid;


--
-- Name: url_userid_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.url_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: url_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.url_userid_seq OWNED BY public.url.userid;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "visitCount" integer NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: session sessionid; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session ALTER COLUMN sessionid SET DEFAULT nextval('public.session_sessionid_seq'::regclass);


--
-- Name: url id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.url ALTER COLUMN id SET DEFAULT nextval('public."URL_id_seq"'::regclass);


--
-- Name: url userid; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.url ALTER COLUMN userid SET DEFAULT nextval('public.url_userid_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '22331a36-bc15-4ec8-aabc-f63d27131b29');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '12c5bc37-45ac-4236-94c4-09bfa8596b7a');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '3150922a-1032-4195-a6b3-74862dbcb96a');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '98df94a9-11db-492c-9b72-36a13a38feba');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', 'adcbc550-580c-4e5d-88cd-6a7f9a704b42');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', 'af361ed5-70f1-4932-a462-244a9d09c12a');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '7a2303eb-9231-4345-8775-e392b4418157');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '3c8328a6-2ed2-4992-8a7f-deb301791938');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '7947adf9-fecb-4c65-a42d-b11a46cc73ae');
INSERT INTO public.session VALUES (1, 'joao@driven.com.br', '424d4346-0c6a-405c-8682-6b5bea93c19a');
INSERT INTO public.session VALUES (8, 'joaaaao@driven.com.br', 'cc5f4373-c087-44fc-9c16-07940d2c8a47');
INSERT INTO public.session VALUES (12, 'flavia@driven.com.br', '3b6cf0b2-dc28-40d8-bf0f-6f211d6cd1c1');
INSERT INTO public.session VALUES (9, 'marcos@driven.com.br', 'c7d58457-733a-434a-8007-235236c5f65a');
INSERT INTO public.session VALUES (13, 'sergio@driven.com.br', '5193ee45-a79f-493c-9924-abd2d24a1a96');
INSERT INTO public.session VALUES (13, 'sergio@driven.com.br', '820ebd2f-863c-4ab5-9218-30472d99c4c9');
INSERT INTO public.session VALUES (13, 'sergio@driven.com.br', '5e134ad8-e427-491e-9e92-39cca19f721a');


--
-- Data for Name: url; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.url VALUES (4, 'DLwYMNfgifRkMv5MapZsz', 'https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/', 0, 1);
INSERT INTO public.url VALUES (5, 'QjaCUfeiLdpY3pEDPPwxB', 'https://www.geeksforgeeks.org/express-js-res-redirect-function/', 0, 1);
INSERT INTO public.url VALUES (8, 'hXPqfEDLVZMqh0kVm8D69', 'https://www.devmedia.com.br/sql-insert/41184', 0, 12);
INSERT INTO public.url VALUES (9, 'BEqLaDmpl5Smoyak2fyfi', 'https://www.devmedia.com.br/sql-insert/41184', 0, 12);
INSERT INTO public.url VALUES (10, 'mdIOh5v2fU7NED007SF4n', 'https://www.devmedia.com.br/sql-insert/41184', 0, 12);
INSERT INTO public.url VALUES (11, 'P_R4TGGuQkcXsV9nnzXhj', 'https://www.devmedia.com.br/sql-insert/41184', 0, 12);
INSERT INTO public.url VALUES (3, 'xkk8L5h26ZxuIRNrp7Mek', 'https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/', 7, 1);
INSERT INTO public.url VALUES (13, 'RqWISoz1XI4cWeyqQ-Xvw', 'https://www.devmedia.com.br/sql-insert/41184', 0, 8);
INSERT INTO public.url VALUES (15, 'tFcK-QsmhQx0tdD4njBSK', 'https://www.devmedia.com.br/sql-insert/41184', 0, 9);
INSERT INTO public.url VALUES (17, '8uO85vc2XZdg9HwuOOHw4', 'https://www.devmedia.com.br/sql-insert/41184', 0, 1);
INSERT INTO public.url VALUES (14, '7pVNMbIB9r685-3-_iCzy', 'https://www.devmedia.com.br/sql-insert/41184', 10, 8);
INSERT INTO public.url VALUES (19, 'G5mW4fQqTZCryURNFRSZi', 'https://www.devmedia.com.br/sql-insert/41184', 0, 13);
INSERT INTO public.url VALUES (7, 'LaYUnokOBNxXC_hVnJ9Kk', 'https://www.devmedia.com.br/sql-insert/41184', 5, 12);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (4, 'joao', 'jo@gmail', 'vafico', 2);
INSERT INTO public.users VALUES (2, 'João', 'joao@driven.com.br', '$2b$10$easotSEy0JciJXy/mqNPjuHRQkOsdCcdrD5KOIsxORo.LdOP1sfKq', 0);
INSERT INTO public.users VALUES (9, 'marcos', 'marcos@driven.com.br', '$2b$10$89BL/D73idrRRKD3.6cMh.gw85Oc9jDqevJf6fzrakaM0AiQvFyVi', 0);
INSERT INTO public.users VALUES (10, 'fabio', 'fabio@driven.com.br', '$2b$10$/FBIJvTSrYCZchERtoCtXeSoZ0II.qQfNgD2xdFomH2Cmqvee89DK', 0);
INSERT INTO public.users VALUES (11, 'ana', 'ana@driven.com.br', '$2b$10$q13EntDQB5kgnu080yHIGOaFxOcAeuNvaAzfnTP6eAsNYOXZlPvnK', 0);
INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$10$07KDPeT1SC64ufGeaw2v5O4EAYJld7g8MB3AGzsHOtWbCkyH7Vqw.', 3);
INSERT INTO public.users VALUES (13, 'Sergio', 'sergio@driven.com.br', '$2b$10$kS6HmyerU03pr4pJ1ezRMOSlxx0PJZuo6yw6jM8mNu7pG0gq2AmAW', 0);
INSERT INTO public.users VALUES (8, 'João', 'joaaaao@driven.com.br', '$2b$10$tTMHgaCvfXo.ssGEpQ3WN.U751TKoyUPOalV5k4rzcG9fO6pBVKT.', 10);
INSERT INTO public.users VALUES (14, 'Sergio2', 'sergio2@driven.com.br', '$2b$10$FUEjhNnMaPhE8aiPMSAUGugCs0lbpL5hRBvOlnpCJGzUuHLsxbvZy', 0);
INSERT INTO public.users VALUES (12, 'flavia', 'flavia@driven.com.br', '$2b$10$iVIUIUh.Ab9u8HTz6is3HOwQA9i/uKsruSL2zW9it5i8huINmLF0m', 5);


--
-- Name: URL_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."URL_id_seq"', 19, true);


--
-- Name: session_sessionid_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.session_sessionid_seq', 6, true);


--
-- Name: url_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.url_userid_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 14, true);


--
-- Name: url URL_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.url
    ADD CONSTRAINT "URL_pk" PRIMARY KEY (id);


--
-- Name: users user_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- Name: session session_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.session
    ADD CONSTRAINT session_fk0 FOREIGN KEY (sessionid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--


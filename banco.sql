/*Resetando a chave primaria*/
DBCC CHECKIDENT (NomeTabela, RESEED, 19766) /*Seta a chave primaria, o proximo registro terá o ID 19766*/
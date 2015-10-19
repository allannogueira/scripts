
/*tabela de log, identica a de briefing_tarefas com dois campos a mais, a data_log e o id_tarefa*/
drop table briefing_tarefas_log;
CREATE TABLE `briefing_tarefas_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `titulo_tarefa` varchar(500) COLLATE latin1_general_ci DEFAULT NULL,
  `prazo_estimado` date DEFAULT NULL,
  `prazo_realizado` date DEFAULT NULL,
  `descricao` varchar(1000) COLLATE latin1_general_ci DEFAULT NULL,
  `id_responsavel` bigint(20) DEFAULT NULL,
  `id_prioridade` bigint(20) DEFAULT NULL,
  `id_projeto` bigint(20) DEFAULT NULL,
  `id_status` bigint(20) DEFAULT NULL,
  `excluido` bit(1) DEFAULT b'0',
  `id_responsavel_quem_cadastrou` bigint(20) DEFAULT NULL,
  `data_log` date DEFAULT NULL,
  `id_tarefa` bigint(20),
  PRIMARY KEY (`id`),
  KEY `id_responsavel` (`id_responsavel`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


DROP TRIGGER trigger_briefing_tarefas_log; 
/*Cadastra em uma tabela o log de tarefas, com o id da tarefa e salva sempre seu estado anterior*/
delimiter $$
CREATE TRIGGER  trigger_briefing_tarefas_log
BEFORE UPDATE
ON briefing_tarefas FOR EACH ROW 
BEGIN
	IF(NEW.titulo_tarefa != OLD.titulo_tarefa or NEW.prazo_estimado != OLD.prazo_estimado or NEW.prazo_estimado != OLD.prazo_estimado or  NEW.prazo_realizado != OLD.prazo_realizado or NEW.descricao != OLD.descricao or NEW.id_responsavel != OLD.id_responsavel
    or NEW.id_prioridade != OLD.id_prioridade or NEW.id_projeto != OLD.id_projeto or NEW.id_status != OLD.id_status or NEW.excluido != OLD.excluido or NEW.id_responsavel_quem_cadastrou != OLD.id_responsavel_quem_cadastrou)
    
    THEN
		insert into briefing_tarefas_log
		SET titulo_tarefa = OLD.titulo_tarefa,
		prazo_estimado = OLD.prazo_estimado,
		prazo_realizado =  OLD.prazo_realizado,
		descricao = OLD.descricao,
		id_responsavel = OLD.id_responsavel,
		id_prioridade = OLD.id_prioridade,
		id_projeto = OLD.id_projeto,
		id_status = OLD.id_status,
		excluido = OLD.excluido,
		id_responsavel_quem_cadastrou = OLD.id_responsavel_quem_cadastrou,
		data_log = NOW(),
		id_tarefa = OLD.id;
	END IF;
END;$$
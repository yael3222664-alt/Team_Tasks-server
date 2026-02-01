import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { listTeams, createTeam, addMember, getTeamMembers } from '../controllers/teams.controller.js';

const router = Router();

router.use(requireAuth);

router.get('/', listTeams);

router.post('/', createTeam);

router.get('/:teamId/members', getTeamMembers);

router.post('/:teamId/members', addMember);

export default router;

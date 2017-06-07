package com.pwr.controller;


import com.pwr.model.VisitTO;
import com.pwr.service.IVisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping(path = "services/visit")
@Transactional
public class VisitController {

    @Autowired
    private IVisitService visitService;

    @RequestMapping(path = "all", method = RequestMethod.GET)
    public List<VisitTO> findAllVisits() {
        return visitService.findAllVisits();
    }

    @RequestMapping(path = "create", method = RequestMethod.POST)
    public VisitTO createPatient(@RequestBody VisitTO visit)
    {
        visitService.registerVisit(visit);
        return visit;

    }
}
